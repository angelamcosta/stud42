import { Campus } from '../campus';
import { Cluster } from '../cluster';
import { CampusNames, ICampus } from '../types';

//
export class Paris extends Campus implements ICampus {
  emoji = (): string => '🇫🇷';

  name = (): CampusNames => 'paris';

  extractorRegexp = (): RegExp =>
    /(?<clusterWithLetter>e(?<cluster>\d+))(?<rowWithLetter>r(?<row>\d+))(?<workspaceWithLetter>p(?<workspace>\d+))/i;

  clusters(): Cluster[] {
    return [
      new Cluster({
        identifier: 'e1',
        name: 'Metropolis',
        totalWorkspaces: 271,
        // prettier-ignore
        map: [
          ['T:r13', 'W:e1r13p1', 'W:e1r13p2', 'W:e1r13p3', 'W:e1r13p4', 'W:e1r13p5', 'W:e1r13p6', 'W:e1r13p7', null, null,        null,        null,         null,         null,         null,         null,         null,         null,         null, 'W:e1r13p8',  'W:e1r13p9',  'W:e1r13p10', 'W:e1r13p11', 'W:e1r13p12', 'W:e1r13p13', 'W:e1r13p14', 'T:r13'],
          ['T:r12', 'W:e1r12p1', 'W:e1r12p2', 'W:e1r12p3', 'W:e1r12p4', 'W:e1r12p5', 'W:e1r12p6', 'W:e1r12p7', null, 'W:e1r12p8', 'W:e1r12p9', 'W:e1r12p10', 'W:e1r12p11', 'W:e1r12p12', 'W:e1r12p13', 'W:e1r12p14', 'W:e1r12p15', 'W:e1r12p16', null, 'W:e1r12p17', 'W:e1r12p18', 'W:e1r12p19', 'W:e1r12p20', 'W:e1r12p21', 'W:e1r12p22', 'W:e1r12p23', 'T:r12'],
          ['T:r11', 'W:e1r11p1', 'W:e1r11p2', 'W:e1r11p3', 'W:e1r11p4', 'W:e1r11p5', 'W:e1r11p6', 'W:e1r11p7', null, 'W:e1r11p8', 'W:e1r11p9', 'W:e1r11p10', 'W:e1r11p11', 'W:e1r11p12', 'W:e1r11p13', 'W:e1r11p14', 'W:e1r11p15', 'W:e1r11p16', null, 'W:e1r11p17', 'W:e1r11p18', 'W:e1r11p19', 'W:e1r11p20', 'W:e1r11p21', 'W:e1r11p22', 'W:e1r11p23', 'T:r11'],
          ['T:r10', 'W:e1r10p1', 'W:e1r10p2', 'W:e1r10p3', 'W:e1r10p4', 'W:e1r10p5', 'W:e1r10p6', 'W:e1r10p7', null, 'W:e1r10p8', 'W:e1r10p9', 'W:e1r10p10', 'W:e1r10p11', 'W:e1r10p12', 'W:e1r10p13', 'W:e1r10p14', 'W:e1r10p15', 'W:e1r10p16', null, 'W:e1r10p17', 'W:e1r10p18', 'W:e1r10p19', 'W:e1r10p20', 'W:e1r10p21', 'W:e1r10p22', 'W:e1r10p23', 'T:r10'],
          ['T:r9',  'W:e1r9p1',  'W:e1r9p2',  'W:e1r9p3',  'W:e1r9p4',  'W:e1r9p5',  'W:e1r9p6',  null,        null, 'P',         'W:e1r9p7',  'W:e1r9p8',   'W:e1r9p9',   'W:e1r9p10',  'W:e1r9p11',  'W:e1r9p12',  'W:e1r9p13',  'P',          null, 'W:e1r9p14',  'W:e1r9p15',  'W:e1r9p16',  'W:e1r9p17',  'W:e1r9p18',  'W:e1r9p19',  'W:e1r9p20',  'T:r9'],
          ['T:r8',  'W:e1r8p1',  'W:e1r8p2',  'W:e1r8p3',  'W:e1r8p4',  'W:e1r8p5',  'W:e1r8p6',  null,        null, 'P',         'W:e1r8p7',  'W:e1r8p8',   'W:e1r8p9',   'W:e1r8p10',  'W:e1r8p11',  'W:e1r8p12',  'W:e1r8p13',  'W:e1r8p14',  null, 'W:e1r8p15',  'W:e1r8p16',  'W:e1r8p17',  'W:e1r8p18',  'W:e1r8p19',  'W:e1r8p20',  'W:e1r8p21',  'T:r8'],
          ['T:r7',  'W:e1r7p1',  'W:e1r7p2',  'W:e1r7p3',  'W:e1r7p4',  'W:e1r7p5',  'W:e1r7p6',  null,        null, 'W:e1r7p7',  'W:e1r7p8',  'W:e1r7p9',   'W:e1r7p10',  'W:e1r7p11',  'W:e1r7p12',  'W:e1r7p13',  'W:e1r7p14',  'W:e1r7p15',  null, 'W:e1r7p16',  'W:e1r7p17',  'W:e1r7p18',  'W:e1r7p19',  'W:e1r7p20',  'W:e1r7p21',  'W:e1r7p22',  'T:r7'],
          ['T:r6',  'W:e1r6p1',  'W:e1r6p2',  'W:e1r6p3',  'W:e1r6p4',  'W:e1r6p5',  'W:e1r6p6',  'W:e1r6p7',  null, 'P',         'W:e1r6p8',  'W:e1r6p9',   'W:e1r6p10',  'W:e1r6p11',  'W:e1r6p12',  'W:e1r6p13',  'W:e1r6p14',  'P',          null, 'W:e1r6p15',  'W:e1r6p16',  'W:e1r6p17',  'W:e1r6p18',  'W:e1r6p19',  'W:e1r6p20',  'W:e1r6p21',  'T:r6'],
          ['T:r5',  'W:e1r5p1',  'W:e1r5p2',  'W:e1r5p3',  'W:e1r5p4',  'W:e1r5p5',  'W:e1r5p6',  'W:e1r5p7',  null, 'W:e1r5p8',  'W:e1r5p9',  'W:e1r5p10',  'W:e1r5p11',  'W:e1r5p12',  'W:e1r5p13',  'W:e1r5p14',  'W:e1r5p15',  'W:e1r5p16',  null, 'W:e1r5p17',  'W:e1r5p18',  'W:e1r5p19',  'W:e1r5p20',  'W:e1r5p21',  'W:e1r5p22',  'W:e1r5p23',  'T:r5'],
          ['T:r4',  'W:e1r4p1',  'W:e1r4p2',  'W:e1r4p3',  'W:e1r4p4',  'W:e1r4p5',  'W:e1r4p6',  'W:e1r4p7',  null, 'W:e1r4p8',  'W:e1r4p9',  'W:e1r4p10',  'W:e1r4p11',  'W:e1r4p12',  'W:e1r4p13',  'W:e1r4p14',  'W:e1r4p15',  'W:e1r4p16',  null, 'W:e1r4p17',  'W:e1r4p18',  'W:e1r4p19',  'W:e1r4p20',  'W:e1r4p21',  'W:e1r4p22',  'W:e1r4p23',  'T:r4'],
          ['T:r3',  'W:e1r3p1',  'W:e1r3p2',  'W:e1r3p3',  'W:e1r3p4',  'W:e1r3p5',  'W:e1r3p6',  'W:e1r3p7',  null, 'P',         'W:e1r3p8',  'W:e1r3p9',   'W:e1r3p10',  'W:e1r3p11',  'W:e1r3p12',  'W:e1r3p13',  'W:e1r3p14',  'P',          null, 'W:e1r3p15',  'W:e1r3p16',  'W:e1r3p17',  'W:e1r3p18',  'W:e1r3p19',  'W:e1r3p20',  'W:e1r3p21',  'T:r3'],
          ['T:r2',  'W:e1r2p1',  'W:e1r2p2',  'W:e1r2p3',  'W:e1r2p4',  'W:e1r2p5',  'W:e1r2p6',  'W:e1r2p7',  null, 'W:e1r2p8',  'W:e1r2p9',  'W:e1r2p10',  'W:e1r2p11',  'W:e1r2p12',  'W:e1r2p13',  'W:e1r2p14',  'W:e1r2p15',  'W:e1r2p16',  null, 'W:e1r2p17',  'W:e1r2p18',  'W:e1r2p19',  'W:e1r2p20',  'W:e1r2p21',  'W:e1r2p22',  'W:e1r2p23',  'T:r2'],
          ['T:r1',  'W:e1r1p1',  'W:e1r1p2',  'W:e1r1p3',  'W:e1r1p4',  'W:e1r1p5',  'W:e1r1p6',  'W:e1r1p7',  null, null,        null,        null,         null,         null,         null,         null,         null,         null,         null, 'W:e1r1p8',   'W:e1r1p9',   'W:e1r1p10',  'W:e1r1p11',  'W:e1r1p12',  'W:e1r1p13',  'W:e1r1p14',  'T:r1'],
        ],
      }),
      new Cluster({
        identifier: 'e2',
        name: 'Westeros',
        totalWorkspaces: 270,
        // prettier-ignore
        map: [
          ['T:r13', 'W:e2r13p1', 'W:e2r13p2', 'W:e2r13p3', 'W:e2r13p4', 'W:e2r13p5', 'W:e2r13p6', 'W:e2r13p7', null, null,        null,        null,         null,         null,         null,         null,         null,         null,         null, 'W:e2r13p8',  'W:e2r13p9',  'W:e2r13p10', 'W:e2r13p11', 'W:e2r13p12', 'W:e2r13p13', 'W:e2r13p14', 'T:r13'],
          ['T:r12', 'W:e2r12p1', 'W:e2r12p2', 'W:e2r12p3', 'W:e2r12p4', 'W:e2r12p5', 'W:e2r12p6', 'W:e2r12p7', null, 'W:e2r12p8', 'W:e2r12p9', 'W:e2r12p10', 'W:e2r12p11', 'W:e2r12p12', 'W:e2r12p13', 'W:e2r12p14', 'W:e2r12p15', 'W:e2r12p16', null, 'W:e2r12p17', 'W:e2r12p18', 'W:e2r12p19', 'W:e2r12p20', 'W:e2r12p21', 'W:e2r12p22', 'W:e2r12p23', 'T:r12'],
          ['T:r11', 'W:e2r11p1', 'W:e2r11p2', 'W:e2r11p3', 'W:e2r11p4', 'W:e2r11p5', 'W:e2r11p6', 'W:e2r11p7', null, 'W:e2r11p8', 'W:e2r11p9', 'W:e2r11p10', 'W:e2r11p11', 'W:e2r11p12', 'W:e2r11p13', 'W:e2r11p14', 'W:e2r11p15', 'W:e2r11p16', null, 'W:e2r11p17', 'W:e2r11p18', 'W:e2r11p19', 'W:e2r11p20', 'W:e2r11p21', 'W:e2r11p22', 'W:e2r11p23', 'T:r11'],
          ['T:r10', 'W:e2r10p1', 'W:e2r10p2', 'W:e2r10p3', 'W:e2r10p4', 'W:e2r10p5', 'W:e2r10p6', 'W:e2r10p7', null, 'W:e2r10p8', 'W:e2r10p9', 'W:e2r10p10', 'W:e2r10p11', 'W:e2r10p12', 'W:e2r10p13', 'W:e2r10p14', 'W:e2r10p15', 'W:e2r10p16', null, 'W:e2r10p17', 'W:e2r10p18', 'W:e2r10p19', 'W:e2r10p20', 'W:e2r10p21', 'W:e2r10p22', 'W:e2r10p23', 'T:r10'],
          ['T:r9',  'W:e2r9p1',  'W:e2r9p2',  'W:e2r9p3',  'W:e2r9p4',  'W:e2r9p5',  'W:e2r9p6',  null,        null, 'P',         'W:e2r9p7',  'W:e2r9p8',   'W:e2r9p9',   'W:e2r9p10',  'W:e2r9p11',  'W:e2r9p12',  'W:e2r9p13',  'P',          null, 'W:e2r9p14',  'W:e2r9p15',  'W:e2r9p16',  'W:e2r9p17',  'W:e2r9p18',  'W:e2r9p19',  'W:e2r9p20',  'T:r9'],
          ['T:r8',  'W:e2r8p1',  'W:e2r8p2',  'W:e2r8p3',  'W:e2r8p4',  'W:e2r8p5',  'W:e2r8p6',  null,        null, 'P',         'W:e2r8p7',  'W:e2r8p8',   'W:e2r8p9',   'W:e2r8p10',  'W:e2r8p11',  'W:e2r8p12',  'W:e2r8p13',  'W:e2r8p14',  null, 'W:e2r8p15',  'W:e2r8p16',  'W:e2r8p17',  'W:e2r8p18',  'W:e2r8p19',  'W:e2r8p20',  'W:e2r8p21',  'T:r8'],
          ['T:r7',  'W:e2r7p1',  'W:e2r7p2',  'W:e2r7p3',  'W:e2r7p4',  'W:e2r7p5',  'W:e2r7p6',  'W:e2r7p7',  null, 'W:e2r7p8',  'W:e2r7p9',  'W:e2r7p10',  'W:e2r7p11',  'W:e2r7p12',  'W:e2r7p13',  'W:e2r7p14',  'W:e2r7p15',  'W:e2r7p16',  null, 'W:e2r7p17',  'W:e2r7p18',  'W:e2r7p19',  'W:e2r7p20',  'W:e2r7p21',  'W:e2r7p22',  'W:e2r7p23',  'T:r7'],
          ['T:r6',  'W:e2r6p1',  'W:e2r6p2',  'W:e2r6p3',  'W:e2r6p4',  'W:e2r6p5',  'W:e2r6p6',  'W:e2r6p7',  null, 'P',         'W:e2r6p8',  'W:e2r6p9',   'W:e2r6p10',  'W:e2r6p11',  'W:e2r6p12',  'W:e2r6p13',  'W:e2r6p14',  'P',          null, null,         'W:e2r6p15',  'W:e2r6p16',  'W:e2r6p17',  'W:e2r6p18',  'W:e2r6p19',  'W:e2r6p20',  'T:r6'],
          ['T:r5',  'W:e2r5p1',  'W:e2r5p2',  'W:e2r5p3',  'W:e2r5p4',  'W:e2r5p5',  'W:e2r5p6',  'W:e2r5p7',  null, 'W:e2r5p8',  'W:e2r5p9',  'W:e2r5p10',  'W:e2r5p11',  'W:e2r5p12',  'W:e2r5p13',  'W:e2r5p14',  'W:e2r5p15',  'W:e2r5p16',  null, null,         'W:e2r5p17',  'W:e2r5p18',  'W:e2r5p19',  'W:e2r5p20',  'W:e2r5p21',  'W:e2r5p22',  'T:r5'],
          ['T:r4',  'W:e2r4p1',  'W:e2r4p2',  'W:e2r4p3',  'W:e2r4p4',  'W:e2r4p5',  'W:e2r4p6',  'W:e2r4p7',  null, 'W:e2r4p8',  'W:e2r4p9',  'W:e2r4p10',  'W:e2r4p11',  'W:e2r4p12',  'W:e2r4p13',  'W:e2r4p14',  'W:e2r4p15',  'W:e2r4p16',  null, 'W:e2r4p17',  'W:e2r4p18',  'W:e2r4p19',  'W:e2r4p20',  'W:e2r4p21',  'W:e2r4p22',  'W:e2r4p23',  'T:r4'],
          ['T:r3',  'W:e2r3p1',  'W:e2r3p2',  'W:e2r3p3',  'W:e2r3p4',  'W:e2r3p5',  'W:e2r3p6',  'W:e2r3p7',  null, 'P',         'W:e2r3p8',  'W:e2r3p9',   'W:e2r3p10',  'W:e2r3p11',  'W:e2r3p12',  'W:e2r3p13',  'W:e2r3p14',  'P',          null, 'W:e2r3p15',  'W:e2r3p16',  'W:e2r3p17',  'W:e2r3p18',  'W:e2r3p19',  'W:e2r3p20',  'W:e2r3p21',  'T:r3'],
          ['T:r2',  'W:e2r2p1',  'W:e2r2p2',  'W:e2r2p3',  'W:e2r2p4',  'W:e2r2p5',  'W:e2r2p6',  'W:e2r2p7',  null, 'W:e2r2p8',  'W:e2r2p9',  'W:e2r2p10',  'W:e2r2p11',  'W:e2r2p12',  'W:e2r2p13',  'W:e2r2p14',  'W:e2r2p15',  'W:e2r2p16',  null, 'W:e2r2p17',  'W:e2r2p18',  'W:e2r2p19',  'W:e2r2p20',  'W:e2r2p21',  'W:e2r2p22',  'W:e2r2p23',  'T:r2'],
          ['T:r1',  'W:e2r1p1',  'W:e2r1p2',  'W:e2r1p3',  'W:e2r1p4',  'W:e2r1p5',  'W:e2r1p6',  'W:e2r1p7',  null, null,        null,        null,         null,         null,         null,         null,         null,         null,         null, 'W:e2r1p8',   'W:e2r1p9',   'W:e2r1p10',  'W:e2r1p11',  'W:e2r1p12',  'W:e2r1p13',  'W:e2r1p14',  'T:r1'],
        ],
      }),
      new Cluster({
        identifier: 'e3',
        name: 'Tatooine',
        totalWorkspaces: 270,
        // prettier-ignore
        map: [
          ['T:r13', 'W:e3r13p1', 'W:e3r13p2', 'W:e3r13p3', 'W:e3r13p4', 'W:e3r13p5', 'W:e3r13p6', 'W:e3r13p7', null, null,        null,        null,         null,         null,         null,         null,         null,         null,         null, 'W:e3r13p8',  'W:e3r13p9',  'W:e3r13p10', 'W:e3r13p11', 'W:e3r13p12', 'W:e3r13p13', 'W:e3r13p14', 'T:r13'],
          ['T:r12', 'W:e3r12p1', 'W:e3r12p2', 'W:e3r12p3', 'W:e3r12p4', 'W:e3r12p5', 'W:e3r12p6', 'W:e3r12p7', null, 'W:e3r12p8', 'W:e3r12p9', 'W:e3r12p10', 'W:e3r12p11', 'W:e3r12p12', 'W:e3r12p13', 'W:e3r12p14', 'W:e3r12p15', 'W:e3r12p16', null, 'W:e3r12p17', 'W:e3r12p18', 'W:e3r12p19', 'W:e3r12p20', 'W:e3r12p21', 'W:e3r12p22', 'W:e3r12p23', 'T:r12'],
          ['T:r11', 'W:e3r11p1', 'W:e3r11p2', 'W:e3r11p3', 'W:e3r11p4', 'W:e3r11p5', 'W:e3r11p6', 'W:e3r11p7', null, 'W:e3r11p8', 'W:e3r11p9', 'W:e3r11p10', 'W:e3r11p11', 'W:e3r11p12', 'W:e3r11p13', 'W:e3r11p14', 'W:e3r11p15', 'W:e3r11p16', null, 'W:e3r11p17', 'W:e3r11p18', 'W:e3r11p19', 'W:e3r11p20', 'W:e3r11p21', 'W:e3r11p22', 'W:e3r11p23', 'T:r11'],
          ['T:r10', 'W:e3r10p1', 'W:e3r10p2', 'W:e3r10p3', 'W:e3r10p4', 'W:e3r10p5', 'W:e3r10p6', 'W:e3r10p7', null, 'W:e3r10p8', 'W:e3r10p9', 'W:e3r10p10', 'W:e3r10p11', 'W:e3r10p12', 'W:e3r10p13', 'W:e3r10p14', 'W:e3r10p15', 'W:e3r10p16', null, 'W:e3r10p17', 'W:e3r10p18', 'W:e3r10p19', 'W:e3r10p20', 'W:e3r10p21', 'W:e3r10p22', 'W:e3r10p23', 'T:r10'],
          ['T:r9',  'W:e3r9p1',  'W:e3r9p2',  'W:e3r9p3',  'W:e3r9p4',  'W:e3r9p5',  'W:e3r9p6',  null,        null, 'P',         'W:e3r9p7',  'W:e3r9p8',   'W:e3r9p9',   'W:e3r9p10',  'W:e3r9p11',  'W:e3r9p12',  'W:e3r9p13',  'P',          null, 'W:e3r9p14',  'W:e3r9p15',  'W:e3r9p16',  'W:e3r9p17',  'W:e3r9p18',  'W:e3r9p19',  'W:e3r9p20',  'T:r9'],
          ['T:r8',  'W:e3r8p1',  'W:e3r8p2',  'W:e3r8p3',  'W:e3r8p4',  'W:e3r8p5',  'W:e3r8p6',  null,        null, 'P',         'W:e3r8p7',  'W:e3r8p8',   'W:e3r8p9',   'W:e3r8p10',  'W:e3r8p11',  'W:e3r8p12',  'W:e3r8p13',  'W:e3r8p14',  null, 'W:e3r8p15',  'W:e3r8p16',  'W:e3r8p17',  'W:e3r8p18',  'W:e3r8p19',  'W:e3r8p20',  'W:e3r8p21',  'T:r8'],
          ['T:r7',  'W:e3r7p1',  'W:e3r7p2',  'W:e3r7p3',  'W:e3r7p4',  'W:e3r7p5',  'W:e3r7p6',  'W:e3r7p7',  null, 'W:e3r7p8',  'W:e3r7p9',  'W:e3r7p10',  'W:e3r7p11',  'W:e3r7p12',  'W:e3r7p13',  'W:e3r7p14',  'W:e3r7p15',  'W:e3r7p16',  null, 'W:e3r7p17',  'W:e3r7p18',  'W:e3r7p19',  'W:e3r7p20',  'W:e3r7p21',  'W:e3r7p22',  'W:e3r7p23',  'T:r7'],
          ['T:r6',  'W:e3r6p1',  'W:e3r6p2',  'W:e3r6p3',  'W:e3r6p4',  'W:e3r6p5',  'W:e3r6p6',  'W:e3r6p7',  null, 'P',         'W:e3r6p8',  'W:e3r6p9',   'W:e3r6p10',  'W:e3r6p11',  'W:e3r6p12',  'W:e3r6p13',  'W:e3r6p14',  'P',          null, null,         'W:e3r6p15',  'W:e3r6p16',  'W:e3r6p17',  'W:e3r6p18',  'W:e3r6p19',  'W:e3r6p20',  'T:r6'],
          ['T:r5',  'W:e3r5p1',  'W:e3r5p2',  'W:e3r5p3',  'W:e3r5p4',  'W:e3r5p5',  'W:e3r5p6',  'W:e3r5p7',  null, 'W:e3r5p8',  'W:e3r5p9',  'W:e3r5p10',  'W:e3r5p11',  'W:e3r5p12',  'W:e3r5p13',  'W:e3r5p14',  'W:e3r5p15',  'W:e3r5p16',  null, null,         'W:e3r5p17',  'W:e3r5p18',  'W:e3r5p19',  'W:e3r5p20',  'W:e3r5p21',  'W:e3r5p22',  'T:r5'],
          ['T:r4',  'W:e3r4p1',  'W:e3r4p2',  'W:e3r4p3',  'W:e3r4p4',  'W:e3r4p5',  'W:e3r4p6',  'W:e3r4p7',  null, 'W:e3r4p8',  'W:e3r4p9',  'W:e3r4p10',  'W:e3r4p11',  'W:e3r4p12',  'W:e3r4p13',  'W:e3r4p14',  'W:e3r4p15',  'W:e3r4p16',  null, 'W:e3r4p17',  'W:e3r4p18',  'W:e3r4p19',  'W:e3r4p20',  'W:e3r4p21',  'W:e3r4p22',  'W:e3r4p23',  'T:r4'],
          ['T:r3',  'W:e3r3p1',  'W:e3r3p2',  'W:e3r3p3',  'W:e3r3p4',  'W:e3r3p5',  'W:e3r3p6',  'W:e3r3p7',  null, 'P',         'W:e3r3p8',  'W:e3r3p9',   'W:e3r3p10',  'W:e3r3p11',  'W:e3r3p12',  'W:e3r3p13',  'W:e3r3p14',  'P',          null, 'W:e3r3p15',  'W:e3r3p16',  'W:e3r3p17',  'W:e3r3p18',  'W:e3r3p19',  'W:e3r3p20',  'W:e3r3p21',  'T:r3'],
          ['T:r2',  'W:e3r2p1',  'W:e3r2p2',  'W:e3r2p3',  'W:e3r2p4',  'W:e3r2p5',  'W:e3r2p6',  'W:e3r2p7',  null, 'W:e3r2p8',  'W:e3r2p9',  'W:e3r2p10',  'W:e3r2p11',  'W:e3r2p12',  'W:e3r2p13',  'W:e3r2p14',  'W:e3r2p15',  'W:e3r2p16',  null, 'W:e3r2p17',  'W:e3r2p18',  'W:e3r2p19',  'W:e3r2p20',  'W:e3r2p21',  'W:e3r2p22',  'W:e3r2p23',  'T:r2'],
          ['T:r1',  'W:e3r1p1',  'W:e3r1p2',  'W:e3r1p3',  'W:e3r1p4',  'W:e3r1p5',  'W:e3r1p6',  'W:e3r1p7',  null, null,        null,        null,         null,         null,         null,         null,         null,         null,         null, 'W:e3r1p8',   'W:e3r1p9',   'W:e3r1p10',  'W:e3r1p11',  'W:e3r1p12',  'W:e3r1p13',  'W:e3r1p14',  'T:r1'],
        ],
      }),
    ];
  }
}
