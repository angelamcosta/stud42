package api

import (
	"context"

	typesgen "atomys.codes/stud42/internal/api/generated/types"
	"atomys.codes/stud42/internal/discord"
	modelgen "atomys.codes/stud42/internal/models/generated"
	"github.com/getsentry/sentry-go"
	"github.com/google/go-github/v47/github"
	"github.com/rs/zerolog/log"
	"golang.org/x/oauth2"
)

const (
	// githubCreator is the GitHub username of the creator of the repository.
	githubCreator = "42Atomys"
	// githubRepository is the GitHub repository name.
	githubRepository = "stud42"
)

// accountLinkCallback is the callback for all accounts. This is used to define
// an asynchronous callback for each account type that will be called when the
// account is linked to a user.
func accountLinkCallback(ctx context.Context, account *modelgen.Account) {
	switch account.Type {
	case string(typesgen.ProviderDiscord):
		discordLinkCallback(ctx, account)
	case string(typesgen.ProviderGithub):
		githubLinkCallback(ctx, account)
	case string(typesgen.ProviderDuo):
		break
	default:
		log.Warn().Str("accountType", account.Type).Msg("no callback is defined")
	}
}

// discordLinkCallback is the callback for Discord accounts when the account is
// linked to a user. It will add the user to the Discord server.
func discordLinkCallback(ctx context.Context, account *modelgen.Account) {
	// Invite the user to the S42 server using the Discord API
	err := discord.
		DefaultClient().
		InviteOnOurDiscord(ctx, account.AccessToken, account.ProviderAccountID)
	if err != nil {
		sentry.CaptureException(err)
	}
}

// githubLinkCallback is the callback for Github accounts when the account is
// linked to a user. It will follow the creator of the repository and star
// the repository.
func githubLinkCallback(ctx context.Context, account *modelgen.Account) {
	client := github.NewClient(oauth2.NewClient(ctx, oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: account.AccessToken},
	)))

	// Star the repository if it's not already starred
	var err error
	var ok bool
	if ok, _, err = client.Activity.IsStarred(ctx, githubCreator, githubRepository); !ok {
		_, err = client.Activity.Star(ctx, githubCreator, githubRepository)
	}
	if err != nil {
		sentry.CaptureException(err)
	}

	// Follow th creator if it's not already followed
	if ok, _, err = client.Users.IsFollowing(ctx, "", githubCreator); !ok {
		_, err = client.Users.Follow(ctx, githubCreator)
	}
	if err != nil {
		sentry.CaptureException(err)
	}
}