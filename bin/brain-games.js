#!/usr/bin/env
import greeting from '../src/cli.js';
import progression from './brain-progression.js';
import calc from './brain-calc.js';
import even from './brain-even.js';
import gcd from './brain-gcd.js';
import prime from './brain-prime.js';

const name = greeting();
even(name);
calc(name);
gcd(name);
progression(name);
prime(name);
