'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';

let registered = false;

export function ensureGsapPlugins() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);
  registered = true;
}

