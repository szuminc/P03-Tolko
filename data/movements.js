const movements = [
  {
    id: 'abs',
    name: 'Abs',
    description: 'Lie on your back with knees bent. Engage your core and curl your upper body toward your knees, then lower with control.',
    defaultDuration: 30,
    defaultReps: 3,
    animationClass: 'anim-abs',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-abs">
      <rect x="6" y="64" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <line x1="46" y1="48" x2="33" y2="62" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="33" y1="62" x2="18" y2="54" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
      <circle cx="33" cy="62" r="3" fill="var(--text-muted)" opacity="0.5"/>
      <g class="anim-abs-upper">
        <circle cx="80" cy="27" r="9" fill="var(--accent)" opacity="0.95"/>
        <line x1="73" y1="32" x2="46" y2="48" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
        <circle cx="73" cy="32" r="3.5" fill="var(--text)"/>
        <circle cx="46" cy="48" r="3.5" fill="var(--text)"/>
        <line x1="70" y1="35" x2="55" y2="48" stroke="var(--text-muted)" stroke-width="4" stroke-linecap="round"/>
        <line x1="55" y1="48" x2="46" y2="44" stroke="var(--text-muted)" stroke-width="4" stroke-linecap="round"/>
      </g>
    </svg>`
  },
  {
    id: 'four-point-rotation',
    name: 'Four-Point Rotation',
    description: 'Start on hands and knees. Extend one arm to the side and rotate your upper body, following your hand with your eyes.',
    defaultDuration: 20,
    defaultReps: 3,
    animationClass: 'anim-four-point',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-four-point">
      <rect x="6" y="62" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <circle cx="74" cy="22" r="9" fill="var(--accent)" opacity="0.95"/>
      <line x1="66" y1="27" x2="38" y2="40" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
      <circle cx="66" cy="27" r="3.5" fill="var(--text)"/>
      <circle cx="38" cy="40" r="3.5" fill="var(--text)"/>
      <line x1="38" y1="40" x2="46" y2="60" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="38" y1="40" x2="26" y2="58" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
      <circle cx="46" cy="60" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <circle cx="26" cy="58" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <line x1="62" y1="29" x2="28" y2="44" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
      <circle cx="28" cy="44" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <g class="anim-four-point-arm">
        <line x1="66" y1="27" x2="82" y2="16" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
        <line x1="82" y1="16" x2="92" y2="10" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
        <circle cx="82" cy="16" r="3" fill="var(--accent)" opacity="0.7"/>
      </g>
    </svg>`
  },
  {
    id: 'hip-flexor',
    name: 'Hip Flexor',
    description: 'Kneel in a lunge position with one knee on the floor. Drive your hips forward to stretch the front of your rear hip.',
    defaultDuration: 30,
    defaultReps: 2,
    animationClass: 'anim-hip-flexor',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-hip-flexor">
      <rect x="6" y="68" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <g class="anim-hip-flexor-figure">
        <circle cx="52" cy="13" r="9" fill="var(--accent)" opacity="0.95"/>
        <line x1="52" y1="22" x2="48" y2="44" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
        <circle cx="52" cy="22" r="3" fill="var(--text)"/>
        <circle cx="48" cy="44" r="4" fill="var(--text)"/>
        <line x1="48" y1="44" x2="30" y2="48" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="30" y1="48" x2="22" y2="68" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="30" cy="48" r="3" fill="var(--text-muted)" opacity="0.6"/>
        <line x1="48" y1="44" x2="68" y2="46" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="68" y1="46" x2="74" y2="68" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="68" cy="46" r="3" fill="var(--text-muted)" opacity="0.6"/>
        <circle cx="74" cy="68" r="4" fill="var(--text-muted)" opacity="0.45"/>
        <line x1="50" y1="25" x2="38" y2="38" stroke="var(--text-muted)" stroke-width="4" stroke-linecap="round"/>
        <line x1="54" y1="25" x2="64" y2="36" stroke="var(--text-muted)" stroke-width="4" stroke-linecap="round"/>
      </g>
    </svg>`
  },
  {
    id: 'plank-hold',
    name: 'Plank Hold',
    description: 'Support your body in a straight line from head to heels on hands and toes. Keep your core braced and breathe steadily.',
    defaultDuration: 30,
    defaultReps: 1,
    animationClass: 'anim-plank',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-plank">
      <rect x="6" y="55" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <g class="anim-plank-figure">
        <circle cx="84" cy="25" r="9" fill="var(--accent)" opacity="0.95"/>
        <line x1="76" y1="29" x2="20" y2="48" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
        <circle cx="76" cy="29" r="3.5" fill="var(--text)"/>
        <circle cx="46" cy="40" r="3.5" fill="var(--text-muted)" opacity="0.6"/>
        <line x1="74" y1="32" x2="68" y2="54" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="71" cy="43" r="3" fill="var(--text-muted)" opacity="0.5"/>
        <circle cx="68" cy="54" r="3.5" fill="var(--text-muted)" opacity="0.45"/>
        <circle cx="20" cy="48" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      </g>
    </svg>`
  },
  {
    id: 'glute-bridge',
    name: 'Glute Bridge',
    description: 'Lie on your back with knees bent and feet flat. Drive your hips up until your body forms a straight line from knees to shoulders.',
    defaultDuration: 30,
    defaultReps: 3,
    animationClass: 'anim-glute-bridge',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-glute-bridge">
      <rect x="6" y="63" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <circle cx="11" cy="50" r="9" fill="var(--accent)" opacity="0.95"/>
      <line x1="74" y1="63" x2="86" y2="63" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
      <circle cx="74" cy="63" r="3" fill="var(--text-muted)" opacity="0.5"/>
      <g class="anim-glute-bridge-hips">
        <line x1="20" y1="55" x2="36" y2="58" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="36" y1="58" x2="52" y2="40" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
        <circle cx="52" cy="40" r="4" fill="var(--text)"/>
        <line x1="52" y1="40" x2="66" y2="50" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <circle cx="66" cy="50" r="3.5" fill="var(--text-muted)" opacity="0.6"/>
        <line x1="66" y1="50" x2="74" y2="63" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <line x1="24" y1="57" x2="38" y2="63" stroke="var(--text-muted)" stroke-width="4" stroke-linecap="round"/>
      </g>
    </svg>`
  },
  {
    id: 'bird-dog',
    name: 'Bird Dog',
    description: 'Start on hands and knees. Extend your right arm forward and left leg back simultaneously, keeping your hips level. Hold, then switch sides.',
    defaultDuration: 20,
    defaultReps: 3,
    animationClass: 'anim-bird-dog',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-bird-dog">
      <rect x="6" y="59" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <circle cx="78" cy="22" r="9" fill="var(--accent)" opacity="0.95"/>
      <line x1="70" y1="26" x2="38" y2="36" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
      <circle cx="70" cy="26" r="3.5" fill="var(--text)"/>
      <circle cx="38" cy="36" r="3.5" fill="var(--text)"/>
      <line x1="68" y1="28" x2="60" y2="58" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
      <circle cx="60" cy="58" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <line x1="38" y1="36" x2="30" y2="58" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
      <circle cx="30" cy="58" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <g class="anim-bird-dog-extend">
        <line x1="70" y1="26" x2="86" y2="16" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="86" cy="16" r="3" fill="var(--accent)" opacity="0.8"/>
        <line x1="38" y1="36" x2="22" y2="30" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
        <line x1="22" y1="30" x2="10" y2="26" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
        <circle cx="10" cy="26" r="3" fill="var(--accent)" opacity="0.8"/>
      </g>
    </svg>`
  },
  {
    id: 'dead-bug',
    name: 'Dead Bug',
    description: 'Lie on your back with arms pointing up and knees bent at 90°. Lower one arm and the opposite leg toward the floor while keeping your lower back pressed down.',
    defaultDuration: 30,
    defaultReps: 3,
    animationClass: 'anim-dead-bug',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-dead-bug">
      <rect x="6" y="64" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <circle cx="84" cy="42" r="9" fill="var(--accent)" opacity="0.95"/>
      <line x1="76" y1="48" x2="42" y2="54" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
      <circle cx="76" cy="48" r="3.5" fill="var(--text)"/>
      <circle cx="42" cy="54" r="3.5" fill="var(--text)"/>
      <line x1="74" y1="46" x2="60" y2="28" stroke="var(--text)" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="60" y1="28" x2="54" y2="16" stroke="var(--text)" stroke-width="4" stroke-linecap="round"/>
      <line x1="42" y1="54" x2="34" y2="38" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
      <line x1="34" y1="38" x2="26" y2="46" stroke="var(--text)" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="34" cy="38" r="3" fill="var(--text-muted)" opacity="0.6"/>
      <g class="anim-dead-bug-limbs">
        <line x1="76" y1="50" x2="88" y2="32" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="88" y1="32" x2="94" y2="20" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
        <line x1="42" y1="54" x2="26" y2="56" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
        <line x1="26" y1="56" x2="12" y2="58" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
        <circle cx="12" cy="58" r="3" fill="var(--accent)" opacity="0.7"/>
      </g>
    </svg>`
  },
  {
    id: 'cat-cow',
    name: 'Cat-Cow',
    description: 'On hands and knees, alternate between arching your spine upward (cat) and letting it sag downward (cow). Move with your breath.',
    defaultDuration: 30,
    defaultReps: 2,
    tags: ['warmup'],
    animationClass: 'anim-cat-cow',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-cat-cow">
      <rect x="6" y="62" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <circle cx="78" cy="24" r="9" fill="var(--accent)" opacity="0.95"/>
      <line x1="70" y1="28" x2="67" y2="33" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
      <path class="anim-cat-cow-spine" d="M67,33 Q54,40 42,37 Q30,34 26,38"
            fill="none" stroke="var(--text)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="67" cy="33" r="3.5" fill="var(--text)"/>
      <circle cx="26" cy="38" r="3.5" fill="var(--text)"/>
      <line x1="67" y1="33" x2="64" y2="56" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
      <circle cx="64" cy="56" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <line x1="26" y1="38" x2="28" y2="60" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
      <circle cx="28" cy="60" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <line x1="38" y1="36" x2="40" y2="60" stroke="var(--text)" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="40" cy="60" r="3" fill="var(--text-muted)" opacity="0.4"/>
    </svg>`
  },
  {
    id: 'push-up',
    name: 'Push-Up',
    description: 'Start in a plank position with hands shoulder-width apart. Lower your chest toward the floor by bending your elbows, then push back up.',
    defaultDuration: 30,
    defaultReps: 3,
    animationClass: 'anim-pushup',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-pushup">
      <rect x="6" y="55" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <circle cx="68" cy="54" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <circle cx="18" cy="50" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <g class="anim-pushup-body">
        <circle cx="84" cy="20" r="9" fill="var(--accent)" opacity="0.95"/>
        <line x1="76" y1="24" x2="20" y2="44" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
        <circle cx="76" cy="24" r="3.5" fill="var(--text)"/>
        <circle cx="46" cy="36" r="3.5" fill="var(--text-muted)" opacity="0.6"/>
        <line x1="74" y1="27" x2="68" y2="54" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="71" cy="40" r="3" fill="var(--text-muted)" opacity="0.5"/>
        <line x1="20" y1="44" x2="18" y2="50" stroke="var(--text)" stroke-width="4.5" stroke-linecap="round"/>
      </g>
    </svg>`
  },
  {
    id: 'squat',
    name: 'Squat',
    description: 'Stand with feet shoulder-width apart. Lower your hips back and down until thighs are parallel to the floor, then drive back up.',
    defaultDuration: 30,
    defaultReps: 3,
    animationClass: 'anim-squat',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-squat">
      <rect x="6" y="70" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <line x1="36" y1="55" x2="36" y2="70" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
      <line x1="64" y1="55" x2="64" y2="70" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
      <circle cx="36" cy="70" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <circle cx="64" cy="70" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <g class="anim-squat-upper">
        <circle cx="50" cy="12" r="9" fill="var(--accent)" opacity="0.95"/>
        <line x1="50" y1="21" x2="50" y2="42" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
        <circle cx="50" cy="21" r="3" fill="var(--text)"/>
        <circle cx="50" cy="42" r="4" fill="var(--text)"/>
        <line x1="50" y1="42" x2="36" y2="55" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="50" y1="42" x2="64" y2="55" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <circle cx="36" cy="55" r="3.5" fill="var(--text-muted)" opacity="0.6"/>
        <circle cx="64" cy="55" r="3.5" fill="var(--text-muted)" opacity="0.6"/>
        <line x1="48" y1="24" x2="28" y2="34" stroke="var(--text-muted)" stroke-width="4" stroke-linecap="round"/>
        <line x1="52" y1="24" x2="72" y2="34" stroke="var(--text-muted)" stroke-width="4" stroke-linecap="round"/>
      </g>
    </svg>`
  },
  {
    id: 'side-plank',
    name: 'Side Plank',
    description: 'Lie on your side and support your body on one forearm and the side of your foot. Keep your body in a straight line and hold.',
    defaultDuration: 30,
    defaultReps: 2,
    animationClass: 'anim-side-plank',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-side-plank">
      <rect x="6" y="62" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <g class="anim-side-plank-figure">
        <circle cx="18" cy="22" r="9" fill="var(--accent)" opacity="0.95"/>
        <line x1="26" y1="26" x2="80" y2="54" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
        <circle cx="26" cy="26" r="3.5" fill="var(--text)"/>
        <circle cx="52" cy="42" r="3.5" fill="var(--text-muted)" opacity="0.6"/>
        <line x1="28" y1="28" x2="32" y2="62" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="30" cy="45" r="3" fill="var(--text-muted)" opacity="0.5"/>
        <circle cx="32" cy="62" r="3.5" fill="var(--text-muted)" opacity="0.45"/>
        <circle cx="80" cy="54" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
        <line x1="26" y1="26" x2="12" y2="12" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="12" y1="12" x2="8" y2="6" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
        <circle cx="12" cy="12" r="3" fill="var(--accent)" opacity="0.7"/>
      </g>
    </svg>`
  },
  {
    id: 'superman',
    name: 'Superman',
    description: 'Lie face down with arms extended overhead. Simultaneously lift your arms, chest, and legs off the floor, hold briefly, then lower.',
    defaultDuration: 30,
    defaultReps: 3,
    animationClass: 'anim-superman',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-superman">
      <rect x="6" y="50" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <line x1="34" y1="44" x2="66" y2="44" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
      <circle cx="50" cy="44" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <g class="anim-superman-lift">
        <circle cx="20" cy="44" r="9" fill="var(--accent)" opacity="0.95"/>
        <line x1="30" y1="44" x2="14" y2="44" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <line x1="14" y1="44" x2="6" y2="44" stroke="var(--text)" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="66" y1="44" x2="82" y2="44" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <circle cx="82" cy="44" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
        <line x1="82" y1="44" x2="94" y2="44" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="94" cy="44" r="3" fill="var(--text-muted)" opacity="0.4"/>
      </g>
    </svg>`
  },
  {
    id: 'cobra',
    name: 'Cobra Stretch',
    description: 'Lie face down with hands under your shoulders. Press through your palms to lift your chest off the floor while keeping your hips down.',
    defaultDuration: 30,
    defaultReps: 2,
    animationClass: 'anim-cobra',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-cobra">
      <rect x="6" y="60" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <line x1="42" y1="58" x2="64" y2="56" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="64" y1="56" x2="86" y2="54" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
      <circle cx="64" cy="56" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <circle cx="86" cy="54" r="3" fill="var(--text-muted)" opacity="0.4"/>
      <g class="anim-cobra-upper">
        <circle cx="14" cy="28" r="9" fill="var(--accent)" opacity="0.95"/>
        <line x1="22" y1="32" x2="34" y2="46" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
        <line x1="34" y1="46" x2="42" y2="58" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
        <circle cx="34" cy="46" r="3.5" fill="var(--text)"/>
        <line x1="24" y1="34" x2="36" y2="58" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="36" cy="58" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      </g>
    </svg>`
  },
  {
    id: 'leg-raise',
    name: 'Leg Raise',
    description: 'Lie on your back with legs straight. Keeping your lower back pressed down, raise both legs to vertical, then slowly lower without touching the floor.',
    defaultDuration: 30,
    defaultReps: 3,
    animationClass: 'anim-leg-raise',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-leg-raise">
      <rect x="6" y="60" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <circle cx="84" cy="50" r="9" fill="var(--accent)" opacity="0.95"/>
      <line x1="76" y1="56" x2="46" y2="58" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
      <circle cx="76" cy="56" r="3.5" fill="var(--text)"/>
      <circle cx="46" cy="58" r="3.5" fill="var(--text)"/>
      <line x1="72" y1="58" x2="76" y2="60" stroke="var(--text-muted)" stroke-width="4" stroke-linecap="round"/>
      <g class="anim-leg-raise-legs">
        <line x1="46" y1="58" x2="26" y2="38" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="26" y1="38" x2="12" y2="20" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="26" cy="38" r="3.5" fill="var(--text-muted)" opacity="0.6"/>
        <circle cx="12" cy="20" r="3" fill="var(--text-muted)" opacity="0.4"/>
      </g>
    </svg>`
  },
  {
    id: 'mountain-climber',
    name: 'Mountain Climber',
    description: 'Start in a push-up position. Drive one knee toward your chest, then quickly switch legs in a running motion while keeping your hips level.',
    defaultDuration: 30,
    defaultReps: 3,
    animationClass: 'anim-mountain-climber',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-mountain-climber">
      <rect x="6" y="56" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <circle cx="84" cy="20" r="9" fill="var(--accent)" opacity="0.95"/>
      <line x1="76" y1="24" x2="36" y2="42" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
      <circle cx="76" cy="24" r="3.5" fill="var(--text)"/>
      <circle cx="54" cy="35" r="3.5" fill="var(--text-muted)" opacity="0.6"/>
      <line x1="74" y1="27" x2="68" y2="54" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
      <circle cx="68" cy="54" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <line x1="36" y1="42" x2="20" y2="52" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
      <circle cx="20" cy="52" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <g class="anim-mountain-climber-leg">
        <line x1="36" y1="42" x2="52" y2="36" stroke="var(--accent)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="52" y1="36" x2="58" y2="52" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="52" cy="36" r="3.5" fill="var(--accent)" opacity="0.7"/>
      </g>
    </svg>`
  },
  {
    id: 'seated-twist',
    name: 'Seated Twist',
    description: 'Sit tall with knees bent. Rotate your upper body to one side, reaching your opposite elbow toward the floor behind you. Switch sides.',
    defaultDuration: 30,
    defaultReps: 2,
    animationClass: 'anim-seated-twist',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-seated-twist">
      <rect x="6" y="62" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <line x1="42" y1="54" x2="62" y2="62" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="62" y1="62" x2="80" y2="60" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
      <circle cx="62" cy="62" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <g class="anim-seated-twist-upper">
        <circle cx="34" cy="28" r="9" fill="var(--accent)" opacity="0.95"/>
        <line x1="34" y1="37" x2="42" y2="54" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
        <circle cx="34" cy="37" r="3.5" fill="var(--text)"/>
        <circle cx="42" cy="54" r="4" fill="var(--text)"/>
        <line x1="36" y1="40" x2="54" y2="46" stroke="var(--text-muted)" stroke-width="4" stroke-linecap="round"/>
        <line x1="36" y1="40" x2="14" y2="34" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
        <circle cx="14" cy="34" r="3" fill="var(--accent)" opacity="0.7"/>
      </g>
    </svg>`
  },
  {
    id: 'commando',
    name: 'Commando',
    description: 'Start in a push-up position. Lower one arm to a forearm, then the other. Push back up one arm at a time. Alternate the leading arm.',
    defaultDuration: 30,
    defaultReps: 3,
    animationClass: 'anim-commando',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-commando">
      <rect x="6" y="56" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <circle cx="84" cy="20" r="9" fill="var(--accent)" opacity="0.95"/>
      <line x1="76" y1="24" x2="20" y2="46" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
      <circle cx="76" cy="24" r="3.5" fill="var(--text)"/>
      <circle cx="46" cy="37" r="3.5" fill="var(--text-muted)" opacity="0.6"/>
      <line x1="74" y1="27" x2="68" y2="54" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
      <circle cx="68" cy="54" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <circle cx="20" cy="46" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <g class="anim-commando-arm">
        <line x1="72" y1="26" x2="56" y2="44" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="56" cy="44" r="3.5" fill="var(--accent)" opacity="0.7"/>
        <line x1="56" y1="44" x2="46" y2="54" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
        <circle cx="46" cy="54" r="3" fill="var(--accent)" opacity="0.6"/>
      </g>
    </svg>`
  },
  {
    id: 'burpee',
    name: 'Burpee',
    description: 'From standing, drop to a squat, kick feet back to plank, do a push-up, jump feet forward, then explode upward with arms overhead.',
    defaultDuration: 30,
    defaultReps: 3,
    animationClass: 'anim-burpee',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-burpee">
      <rect x="6" y="72" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <g class="anim-burpee-figure">
        <circle cx="50" cy="10" r="9" fill="var(--accent)" opacity="0.95"/>
        <line x1="50" y1="19" x2="50" y2="38" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
        <circle cx="50" cy="19" r="3" fill="var(--text)"/>
        <circle cx="50" cy="38" r="4" fill="var(--text)"/>
        <line x1="50" y1="38" x2="38" y2="54" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="50" y1="38" x2="62" y2="54" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <circle cx="38" cy="54" r="3.5" fill="var(--text-muted)" opacity="0.6"/>
        <circle cx="62" cy="54" r="3.5" fill="var(--text-muted)" opacity="0.6"/>
        <line x1="38" y1="54" x2="30" y2="70" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <line x1="62" y1="54" x2="70" y2="70" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <line x1="48" y1="22" x2="26" y2="12" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="52" y1="22" x2="74" y2="12" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
        <circle cx="26" cy="12" r="3" fill="var(--accent)" opacity="0.7"/>
        <circle cx="74" cy="12" r="3" fill="var(--accent)" opacity="0.7"/>
      </g>
    </svg>`
  },
  {
    id: 'caterpillar-walk',
    name: 'Caterpillar Walk',
    description: 'Stand tall, then hinge forward and walk your hands out to a plank. Pause, then walk your hands back and stand. Keep legs as straight as possible.',
    defaultDuration: 30,
    defaultReps: 2,
    animationClass: 'anim-caterpillar',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-caterpillar">
      <rect x="6" y="64" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <g class="anim-caterpillar-figure">
        <circle cx="28" cy="38" r="9" fill="var(--accent)" opacity="0.95"/>
        <line x1="34" y1="44" x2="50" y2="40" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
        <circle cx="34" cy="44" r="3.5" fill="var(--text)"/>
        <circle cx="50" cy="40" r="4" fill="var(--text)"/>
        <line x1="50" y1="40" x2="44" y2="64" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="50" y1="40" x2="60" y2="64" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <circle cx="44" cy="64" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
        <circle cx="60" cy="64" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
        <line x1="36" y1="46" x2="20" y2="60" stroke="var(--text-muted)" stroke-width="4" stroke-linecap="round"/>
        <line x1="36" y1="46" x2="28" y2="64" stroke="var(--text-muted)" stroke-width="4" stroke-linecap="round"/>
        <circle cx="20" cy="60" r="3" fill="var(--text-muted)" opacity="0.4"/>
        <circle cx="28" cy="64" r="3" fill="var(--text-muted)" opacity="0.4"/>
      </g>
    </svg>`
  },
  {
    id: 'jump-squat',
    name: 'Jump Squat',
    description: 'Lower into a squat, then explode upward, leaving the floor completely. Land softly with bent knees and immediately descend into the next squat.',
    defaultDuration: 20,
    defaultReps: 3,
    animationClass: 'anim-jump-squat',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-jump-squat">
      <rect x="6" y="72" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <g class="anim-jump-squat-figure">
        <circle cx="50" cy="12" r="9" fill="var(--accent)" opacity="0.95"/>
        <line x1="50" y1="21" x2="50" y2="40" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
        <circle cx="50" cy="21" r="3" fill="var(--text)"/>
        <circle cx="50" cy="40" r="4" fill="var(--text)"/>
        <line x1="50" y1="40" x2="36" y2="54" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="50" y1="40" x2="64" y2="54" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <circle cx="36" cy="54" r="3.5" fill="var(--text-muted)" opacity="0.6"/>
        <circle cx="64" cy="54" r="3.5" fill="var(--text-muted)" opacity="0.6"/>
        <line x1="36" y1="54" x2="28" y2="70" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <line x1="64" y1="54" x2="72" y2="70" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <line x1="48" y1="24" x2="28" y2="16" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="52" y1="24" x2="72" y2="16" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
        <circle cx="28" cy="16" r="3" fill="var(--accent)" opacity="0.7"/>
        <circle cx="72" cy="16" r="3" fill="var(--accent)" opacity="0.7"/>
      </g>
    </svg>`
  },
  {
    id: 'high-knees',
    name: 'High Knees',
    description: 'Run in place, driving each knee up to hip height while pumping your arms. Keep your core tight and land lightly on the balls of your feet.',
    defaultDuration: 30,
    defaultReps: 3,
    animationClass: 'anim-high-knees',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-high-knees">
      <rect x="6" y="70" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <circle cx="50" cy="12" r="9" fill="var(--accent)" opacity="0.95"/>
      <line x1="50" y1="21" x2="50" y2="40" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
      <circle cx="50" cy="21" r="3" fill="var(--text)"/>
      <circle cx="50" cy="40" r="4" fill="var(--text)"/>
      <line x1="50" y1="40" x2="58" y2="56" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="58" y1="56" x2="62" y2="70" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
      <circle cx="58" cy="56" r="3.5" fill="var(--text-muted)" opacity="0.6"/>
      <circle cx="62" cy="70" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <line x1="48" y1="24" x2="30" y2="34" stroke="var(--text-muted)" stroke-width="4" stroke-linecap="round"/>
      <line x1="52" y1="24" x2="70" y2="36" stroke="var(--text-muted)" stroke-width="4" stroke-linecap="round"/>
      <g class="anim-high-knees-leg">
        <line x1="50" y1="40" x2="38" y2="28" stroke="var(--accent)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="38" y1="28" x2="32" y2="44" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="38" cy="28" r="3.5" fill="var(--accent)" opacity="0.8"/>
      </g>
    </svg>`
  },
  {
    id: 'jumping-jack',
    name: 'Jumping Jack',
    description: 'From standing with feet together and arms at sides, jump to spread your feet wide while raising your arms overhead. Jump back to start.',
    defaultDuration: 30,
    defaultReps: 3,
    tags: [],
    animationClass: 'anim-jumping-jack',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-jumping-jack">
      <rect x="6" y="70" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <circle cx="50" cy="10" r="9" fill="var(--accent)" opacity="0.95"/>
      <line x1="50" y1="19" x2="50" y2="38" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
      <circle cx="50" cy="19" r="3" fill="var(--text)"/>
      <circle cx="50" cy="38" r="4" fill="var(--text)"/>
      <g class="anim-jumping-jack-limbs">
        <line x1="50" y1="22" x2="22" y2="12" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="50" y1="22" x2="78" y2="12" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
        <circle cx="22" cy="12" r="3" fill="var(--accent)" opacity="0.7"/>
        <circle cx="78" cy="12" r="3" fill="var(--accent)" opacity="0.7"/>
        <line x1="50" y1="38" x2="30" y2="56" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="50" y1="38" x2="70" y2="56" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <circle cx="30" cy="56" r="3.5" fill="var(--text-muted)" opacity="0.6"/>
        <circle cx="70" cy="56" r="3.5" fill="var(--text-muted)" opacity="0.6"/>
        <line x1="30" y1="56" x2="22" y2="70" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <line x1="70" y1="56" x2="78" y2="70" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
      </g>
    </svg>`
  },

  // ── Warmup movements ──────────────────────────────────────────────────────
  {
    id: 'pecs-stretch',
    name: 'Pecs Stretch',
    description: 'Stand tall and clasp your hands behind your lower back. Squeeze your shoulder blades together, lift your chest, and hold.',
    defaultDuration: 30,
    defaultReps: 2,
    tags: ['warmup'],
    animationClass: 'anim-pecs',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-pecs">
      <rect x="6" y="70" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <g class="anim-pecs-figure">
        <circle cx="50" cy="11" r="9" fill="var(--accent)" opacity="0.95"/>
        <line x1="50" y1="20" x2="50" y2="44" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
        <circle cx="50" cy="20" r="3" fill="var(--text)"/>
        <circle cx="50" cy="44" r="4" fill="var(--text)"/>
        <line x1="50" y1="44" x2="44" y2="70" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="50" y1="44" x2="56" y2="70" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="47" y1="25" x2="30" y2="36" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="53" y1="25" x2="70" y2="36" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="30" y1="36" x2="50" y2="48" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
        <line x1="70" y1="36" x2="50" y2="48" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
        <circle cx="50" cy="48" r="3.5" fill="var(--accent)" opacity="0.7"/>
        <circle cx="30" cy="36" r="3" fill="var(--accent)" opacity="0.5"/>
        <circle cx="70" cy="36" r="3" fill="var(--accent)" opacity="0.5"/>
      </g>
    </svg>`
  },
  {
    id: 'lats-stretch',
    name: 'Lats Stretch',
    description: 'Stand tall. Raise one arm overhead and bend it at the elbow, reaching toward the opposite side. Let your body lean gently to deepen the stretch.',
    defaultDuration: 30,
    defaultReps: 2,
    tags: ['warmup'],
    animationClass: 'anim-lats',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-lats">
      <rect x="6" y="70" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <g class="anim-lats-figure">
        <circle cx="44" cy="12" r="9" fill="var(--accent)" opacity="0.95"/>
        <line x1="44" y1="21" x2="48" y2="44" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
        <circle cx="44" cy="21" r="3" fill="var(--text)"/>
        <circle cx="48" cy="44" r="4" fill="var(--text)"/>
        <line x1="48" y1="44" x2="42" y2="70" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="48" y1="44" x2="58" y2="70" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="42" y1="24" x2="26" y2="14" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="26" y1="14" x2="42" y2="20" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="42" y1="20" x2="66" y2="26" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
        <circle cx="26" cy="14" r="3" fill="var(--accent)" opacity="0.6"/>
        <circle cx="66" cy="26" r="3" fill="var(--accent)" opacity="0.7"/>
        <line x1="48" y1="26" x2="58" y2="38" stroke="var(--text-muted)" stroke-width="4" stroke-linecap="round"/>
      </g>
    </svg>`
  },
  {
    id: 'fire-hydrant',
    name: 'Fire Hydrant',
    description: 'Start on hands and knees. Keeping your knee bent at 90°, raise one knee out to the side to hip height, then lower. Keep your hips level throughout.',
    defaultDuration: 30,
    defaultReps: 3,
    tags: ['warmup'],
    animationClass: 'anim-fire-hydrant',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-fire-hydrant">
      <rect x="6" y="62" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <circle cx="74" cy="22" r="9" fill="var(--accent)" opacity="0.95"/>
      <line x1="66" y1="27" x2="36" y2="38" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
      <circle cx="66" cy="27" r="3.5" fill="var(--text)"/>
      <circle cx="36" cy="38" r="3.5" fill="var(--text)"/>
      <line x1="62" y1="29" x2="58" y2="60" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
      <circle cx="58" cy="60" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <line x1="36" y1="38" x2="28" y2="60" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
      <circle cx="28" cy="60" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
      <line x1="64" y1="29" x2="58" y2="60" stroke="var(--text-muted)" stroke-width="4" stroke-linecap="round"/>
      <g class="anim-fire-hydrant-leg">
        <line x1="36" y1="38" x2="54" y2="30" stroke="var(--accent)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="54" y1="30" x2="56" y2="50" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="54" cy="30" r="3.5" fill="var(--accent)" opacity="0.75"/>
      </g>
    </svg>`
  },
  {
    id: 'anterior-deltoid',
    name: 'Anterior Deltoid',
    description: 'Stand with one arm extended straight behind you, palm facing up. Gently pull the arm back and up to feel the stretch in the front of the shoulder.',
    defaultDuration: 30,
    defaultReps: 2,
    tags: ['warmup'],
    animationClass: 'anim-ant-delt',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-ant-delt">
      <rect x="6" y="70" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <g class="anim-ant-delt-figure">
        <circle cx="60" cy="12" r="9" fill="var(--accent)" opacity="0.95"/>
        <line x1="58" y1="21" x2="54" y2="44" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
        <circle cx="58" cy="21" r="3" fill="var(--text)"/>
        <circle cx="54" cy="44" r="4" fill="var(--text)"/>
        <line x1="54" y1="44" x2="48" y2="70" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="54" y1="44" x2="62" y2="70" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="56" y1="24" x2="68" y2="36" stroke="var(--text-muted)" stroke-width="4" stroke-linecap="round"/>
        <g class="anim-ant-delt-arm">
          <line x1="56" y1="24" x2="32" y2="30" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
          <line x1="32" y1="30" x2="14" y2="24" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
          <circle cx="32" cy="30" r="3" fill="var(--accent)" opacity="0.6"/>
          <circle cx="14" cy="24" r="3" fill="var(--accent)" opacity="0.7"/>
        </g>
      </g>
    </svg>`
  },

  // ── Cooldown movements ─────────────────────────────────────────────────────
  {
    id: 'abs-stretch',
    name: 'Abs Stretch',
    description: 'Stand tall and raise both arms overhead, interlacing your fingers. Reach up as far as possible, letting your ribcage lift and your abs lengthen.',
    defaultDuration: 30,
    defaultReps: 2,
    tags: ['cooldown'],
    animationClass: 'anim-abs-stretch',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-abs-stretch">
      <rect x="6" y="72" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <g class="anim-abs-stretch-figure">
        <circle cx="50" cy="16" r="9" fill="var(--accent)" opacity="0.95"/>
        <line x1="50" y1="25" x2="50" y2="48" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
        <circle cx="50" cy="25" r="3" fill="var(--text)"/>
        <circle cx="50" cy="48" r="4" fill="var(--text)"/>
        <line x1="50" y1="48" x2="44" y2="72" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="50" y1="48" x2="56" y2="72" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="47" y1="28" x2="34" y2="10" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="53" y1="28" x2="66" y2="10" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="34" y1="10" x2="50" y2="6" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
        <line x1="66" y1="10" x2="50" y2="6" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
        <circle cx="50" cy="6" r="3" fill="var(--accent)" opacity="0.7"/>
      </g>
    </svg>`
  },
  {
    id: 'child-pose',
    name: "Child's Pose",
    description: "Kneel and sit back on your heels. Fold your upper body forward and extend your arms in front of you on the floor. Let your forehead rest down and breathe.",
    defaultDuration: 40,
    defaultReps: 1,
    tags: ['cooldown'],
    animationClass: 'anim-child-pose',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-child-pose">
      <rect x="6" y="62" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <g class="anim-child-pose-figure">
        <circle cx="22" cy="54" r="9" fill="var(--accent)" opacity="0.95"/>
        <line x1="30" y1="50" x2="48" y2="44" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="48" cy="44" r="3.5" fill="var(--text)"/>
        <line x1="48" y1="44" x2="66" y2="34" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
        <circle cx="66" cy="34" r="3.5" fill="var(--text)"/>
        <line x1="66" y1="34" x2="80" y2="44" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="66" y1="34" x2="74" y2="50" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <circle cx="80" cy="44" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
        <circle cx="74" cy="50" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
        <line x1="80" y1="44" x2="86" y2="60" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <line x1="74" y1="50" x2="80" y2="62" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="86" cy="60" r="3" fill="var(--text-muted)" opacity="0.4"/>
        <circle cx="80" cy="62" r="3" fill="var(--text-muted)" opacity="0.4"/>
      </g>
    </svg>`
  },
  {
    id: 'downward-dog',
    name: 'Downward Dog',
    description: 'From a plank position, push your hips up and back to form an inverted V. Press your heels toward the floor and let your head hang between your arms.',
    defaultDuration: 40,
    defaultReps: 1,
    tags: ['cooldown'],
    animationClass: 'anim-downward-dog',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-downward-dog">
      <rect x="6" y="62" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <g class="anim-downward-dog-figure">
        <circle cx="24" cy="50" r="9" fill="var(--accent)" opacity="0.95"/>
        <line x1="32" y1="46" x2="52" y2="20" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
        <circle cx="52" cy="20" r="4" fill="var(--text)"/>
        <line x1="52" y1="20" x2="74" y2="42" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <circle cx="64" cy="32" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
        <line x1="74" y1="42" x2="80" y2="60" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="74" cy="42" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
        <circle cx="80" cy="60" r="3.5" fill="var(--text-muted)" opacity="0.5"/>
        <line x1="30" y1="48" x2="18" y2="62" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="18" cy="62" r="3.5" fill="var(--text-muted)" opacity="0.4"/>
      </g>
    </svg>`
  },
  {
    id: 'triceps-stretch',
    name: 'Triceps Stretch',
    description: 'Raise one arm overhead and bend it behind your head. Use your other hand to gently press the elbow down. Feel the stretch along the back of your upper arm.',
    defaultDuration: 30,
    defaultReps: 2,
    tags: ['cooldown'],
    animationClass: 'anim-triceps',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-triceps">
      <rect x="6" y="70" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <g class="anim-triceps-figure">
        <circle cx="50" cy="12" r="9" fill="var(--accent)" opacity="0.95"/>
        <line x1="50" y1="21" x2="50" y2="44" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
        <circle cx="50" cy="21" r="3" fill="var(--text)"/>
        <circle cx="50" cy="44" r="4" fill="var(--text)"/>
        <line x1="50" y1="44" x2="44" y2="70" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="50" y1="44" x2="56" y2="70" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="48" y1="24" x2="62" y2="10" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="62" y1="10" x2="56" y2="30" stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
        <circle cx="62" cy="10" r="3.5" fill="var(--accent)" opacity="0.7"/>
        <line x1="50" y1="26" x2="64" y2="12" stroke="var(--text-muted)" stroke-width="4" stroke-linecap="round"/>
        <line x1="64" y1="12" x2="70" y2="20" stroke="var(--text-muted)" stroke-width="4" stroke-linecap="round"/>
        <circle cx="64" cy="12" r="3" fill="var(--text-muted)" opacity="0.5"/>
      </g>
    </svg>`
  },
  {
    id: 'glutes-stretch',
    name: 'Glutes Stretch',
    description: 'Lie on your back and cross one ankle over the opposite knee in a figure-four. Clasp your hands behind the bottom thigh and gently pull both legs toward your chest.',
    defaultDuration: 40,
    defaultReps: 2,
    tags: ['cooldown'],
    animationClass: 'anim-glutes-stretch',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-glutes-stretch">
      <rect x="6" y="64" width="88" height="2.5" rx="1.2" fill="var(--text-muted)" opacity="0.18"/>
      <circle cx="84" cy="48" r="9" fill="var(--accent)" opacity="0.95"/>
      <line x1="76" y1="54" x2="50" y2="56" stroke="var(--text)" stroke-width="6" stroke-linecap="round"/>
      <circle cx="76" cy="54" r="3.5" fill="var(--text)"/>
      <circle cx="50" cy="56" r="3.5" fill="var(--text)"/>
      <g class="anim-glutes-legs">
        <line x1="50" y1="56" x2="36" y2="44" stroke="var(--text)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="36" y1="44" x2="26" y2="56" stroke="var(--text)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="36" cy="44" r="3.5" fill="var(--text-muted)" opacity="0.6"/>
        <line x1="50" y1="56" x2="34" y2="36" stroke="var(--accent)" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="34" y1="36" x2="20" y2="46" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="34" cy="36" r="3.5" fill="var(--accent)" opacity="0.7"/>
        <circle cx="20" cy="46" r="3" fill="var(--accent)" opacity="0.6"/>
        <line x1="72" y1="56" x2="48" y2="48" stroke="var(--text-muted)" stroke-width="4" stroke-linecap="round"/>
        <circle cx="48" cy="48" r="2.5" fill="var(--text-muted)" opacity="0.5"/>
      </g>
    </svg>`
  }
];
