const form = document.getElementById('health-form');
const output = document.getElementById('advice-output');

const adviceSets = {
  general: [
    'Aim for 7-9 hours of sleep each night and keep a consistent bedtime schedule.',
    'Eat a balanced diet rich in vegetables, lean protein, whole grains, and healthy fats.',
    'Stay hydrated throughout the day by drinking water before and after meals.',
    'Move your body regularly with brisk walks, stretching, or a short workout every day.',
  ],
  lose: [
    'Reduce processed foods and sugary drinks, and choose whole foods when possible.',
    'Try a mix of cardio and strength training to burn calories and preserve muscle.',
    'Use smaller plates, track portions, and eat mindful meals without distractions.',
    'Make gradual changes you can sustain instead of quick restrictions.',
  ],
  gain: [
    'Increase your protein intake with lean meat, fish, dairy, beans, and healthy snacks.',
    'Focus on strength training 3-4 times per week with compound exercises.',
    'Eat slightly more calories than you burn, but choose nutrient-dense foods.',
    'Prioritize recovery days and make sure you get enough sleep to support muscle growth.',
  ],
  stress: [
    'Practice deep breathing, meditation, or short mindfulness breaks daily.',
    'Limit screen time before bed and build a calming wind-down routine.',
    'Stay connected with friends or family and share how you are feeling.',
    'Try gentle movement like yoga, walking, or light stretching to release tension.',
  ],
};

const ageAdvice = (age) => {
  if (age < 18) {
    return 'Since you are under 18, focus on staying active, eating whole foods, and speaking with a parent or guardian about your wellness goals.';
  }
  if (age <= 35) {
    return 'At your age, building healthy daily routines can set a strong foundation for long-term wellness.';
  }
  if (age <= 55) {
    return 'Prioritize balanced nutrition, regular exercise, and preventative health habits like screenings and stress management.';
  }
  return 'For adults over 55, gentle strength work, flexibility, and regular medical checkups help maintain vitality.';
};

const activityAdvice = (activity) => {
  switch (activity) {
    case 'low':
      return 'If your activity level is low, start with small daily habits like a 15-minute walk and standing breaks.';
    case 'moderate':
      return 'Keep your current activity level consistent, and add variety with strength or flexibility training.';
    case 'high':
      return 'For high activity, support recovery with hydration, balanced meals, and good sleep habits.';
    default:
      return '';
  }
};

const renderAdvice = (lines) => {
  output.innerHTML = '';
  lines.forEach((text) => {
    const block = document.createElement('div');
    block.className = 'advice-block';
    block.innerHTML = `<p>${text}</p>`;
    output.appendChild(block);
  });
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const age = Number(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const activity = document.getElementById('activity').value;
  const goal = document.getElementById('goal').value;

  const selectedAdvice = adviceSets[goal] || adviceSets.general;
  const combinedAdvice = [
    `Gender: ${gender === 'other' ? 'Non-binary / other' : gender.charAt(0).toUpperCase() + gender.slice(1)}.`,
    ageAdvice(age),
    activityAdvice(activity),
    ...selectedAdvice,
  ];

  renderAdvice(combinedAdvice);
});
