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
  }
];
