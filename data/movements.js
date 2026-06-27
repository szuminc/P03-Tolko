const movements = [
  {
    id: 'abs',
    name: 'Abs',
    description: 'Lie on your back with knees bent. Engage your core and curl your upper body toward your knees, then lower with control.',
    defaultDuration: 30,
    defaultReps: 3,
    animationClass: 'anim-abs',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" class="movement-svg anim-abs">
      <g class="anim-abs-figure">
        <circle class="anim-abs-head" cx="78" cy="30" r="7" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
        <line class="anim-abs-torso" x1="71" y1="33" x2="44" y2="38" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="44" y1="38" x2="33" y2="52" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="33" y1="52" x2="22" y2="44" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="71" y1="35" x2="60" y2="45" stroke="var(--text-muted)" stroke-width="2" stroke-linecap="round"/>
        <line x1="60" y1="45" x2="52" y2="41" stroke="var(--text-muted)" stroke-width="2" stroke-linecap="round"/>
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
      <circle cx="72" cy="28" r="7" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
      <line x1="65" y1="31" x2="44" y2="36" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="44" y1="36" x2="40" y2="52" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="57" y1="37" x2="57" y2="52" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="44" y1="36" x2="30" y2="32" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
      <g class="anim-four-point-arm">
        <line x1="65" y1="31" x2="80" y2="24" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="80" y1="24" x2="90" y2="18" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
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
      <g class="anim-hip-flexor-figure">
        <circle cx="62" cy="14" r="7" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
        <line x1="62" y1="21" x2="58" y2="38" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="58" y1="38" x2="72" y2="52" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="72" y1="52" x2="78" y2="65" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="58" y1="38" x2="40" y2="50" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="40" y1="50" x2="28" y2="65" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="62" y1="24" x2="72" y2="32" stroke="var(--text-muted)" stroke-width="2" stroke-linecap="round"/>
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
      <g class="anim-plank-figure">
        <circle cx="82" cy="30" r="7" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
        <line x1="75" y1="33" x2="30" y2="43" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="70" y1="36" x2="66" y2="52" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="66" y1="52" x2="62" y2="52" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="35" y1="42" x2="30" y2="55" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="30" y1="55" x2="22" y2="55" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
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
      <g class="anim-glute-bridge-hips">
        <circle cx="78" cy="38" r="7" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
        <line x1="71" y1="40" x2="52" y2="38" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="52" y1="38" x2="38" y2="52" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="38" y1="52" x2="25" y2="52" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="52" y1="38" x2="62" y2="50" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="71" y1="44" x2="68" y2="55" stroke="var(--text-muted)" stroke-width="2" stroke-linecap="round"/>
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
      <circle cx="55" cy="30" r="7" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
      <line x1="48" y1="33" x2="35" y2="38" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="35" y1="38" x2="30" y2="52" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="44" y1="37" x2="44" y2="52" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
      <g class="anim-bird-dog-extend">
        <line x1="48" y1="33" x2="66" y2="28" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="66" y1="28" x2="78" y2="26" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
        <line x1="35" y1="38" x2="22" y2="34" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="22" y1="34" x2="12" y2="30" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
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
      <circle cx="75" cy="35" r="7" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
      <line x1="68" y1="37" x2="42" y2="40" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="42" y1="40" x2="34" y2="52" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="34" y1="52" x2="24" y2="44" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
      <g class="anim-dead-bug-limbs">
        <line x1="60" y1="38" x2="70" y2="24" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="70" y1="24" x2="76" y2="16" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
        <line x1="42" y1="40" x2="30" y2="30" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="30" y1="30" x2="20" y2="24" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
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
      <circle cx="74" cy="30" r="7" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
      <path class="anim-cat-cow-spine" d="M67,33 Q55,38 44,36 Q33,34 28,37" fill="none" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="44" y1="36" x2="40" y2="52" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="55" y1="35" x2="55" y2="52" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="67" y1="33" x2="64" y2="22" stroke="var(--text-muted)" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  }
];
