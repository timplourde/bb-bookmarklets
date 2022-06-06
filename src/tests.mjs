import { deepEqual, equal } from 'assert';
import {parseDigit} from './parseDigit.mjs';
import {parseGrade} from './parseGrade.mjs';

equal(parseDigit("100"), 100);
equal(parseDigit("10.1"), 10.1);

deepEqual(parseGrade('9 / 10'), [9,10]);
deepEqual(parseGrade('42.92 / 50.41'), [42.92, 50.41]);