// Don't run on Chrome's internal pages
if (!window.location.href.startsWith('chrome://')) {
  const buddy = document.createElement('div');
  buddy.id = 'pixel-buddy-container';
  document.body.appendChild(buddy);

  // Photo data - you'll replace these with actual base64 encoded images or URLs
  const photos = [
    { girl: 'photo1_girl', guy: 'photo1_guy', label: '1' },
    { girl: 'photo2_girl', guy: 'photo2_guy', label: '2' },
    { girl: 'photo3_girl', guy: 'photo3_guy', label: '3' },
    { girl: 'photo4_girl', guy: 'photo4_guy', label: '4' },
    { girl: 'photo5_girl', guy: 'photo5_guy', label: '5' },
    { girl: 'photo6_girl', guy: 'photo6_guy', label: '6' },
    { girl: 'photo7_girl', guy: 'photo7_guy', label: '7' }
  ];

  let currentPhotoIndex = 0;

  // Create the buddy HTML
  buddy.innerHTML = `
    <div id="pixel-buddies">
      <button id="prev-btn" class="nav-btn prev-btn">←</button>
      
      <div id="characters-container">
        <div id="buddy-guy" class="buddy guy">
          <div class="pixel-face"></div>
          <div class="pixel-hair"></div>
          <div class="eyes"></div>
          <div class="mouth"></div>
        </div>
        <div id="buddy-girl" class="buddy girl">
          <div class="pixel-face"></div>
          <div class="pixel-hair"></div>
          <div class="eyes"></div>
          <div class="mouth"></div>
        </div>
      </div>

      <button id="next-btn" class="nav-btn next-btn">→</button>
      
      <div id="interaction-text" class="interaction-text"></div>
      <div class="hearts"></div>
    </div>
  `;

  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const buddyGuy = document.getElementById('buddy-guy');
  const buddyGirl = document.getElementById('buddy-girl');
  const interactionText = document.getElementById('interaction-text');

  // Navigation functions
  function updatePhoto(index) {
    currentPhotoIndex = (index + photos.length) % photos.length;
    // Photo index updates here - you can add logic to change pixel art based on photo
  }

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    updatePhoto(currentPhotoIndex - 1);
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    updatePhoto(currentPhotoIndex + 1);
  });

  // Girl click - turns circular and rolls out with GRRRR
  buddyGirl.addEventListener('click', (e) => {
    e.stopPropagation();
    buddyGirl.classList.add('girl-attack');
    interactionText.textContent = 'GRRRR!';
    interactionText.classList.add('show-text');
    
    setTimeout(() => {
      buddyGirl.classList.remove('girl-attack');
      interactionText.classList.remove('show-text');
    }, 1500);
  });

  // Guy click - turns into duck and says QUACK
  buddyGuy.addEventListener('click', (e) => {
    e.stopPropagation();
    buddyGuy.classList.add('guy-duck');
    interactionText.textContent = 'QUACK!';
    interactionText.classList.add('show-text');
    
    setTimeout(() => {
      buddyGuy.classList.remove('guy-duck');
      interactionText.classList.remove('show-text');
    }, 1500);
  });

  // Hover effect
  const container = document.getElementById('pixel-buddies');
  container.addEventListener('mouseenter', () => {
    container.style.transform = 'scale(1.05)';
  });

  container.addEventListener('mouseleave', () => {
    container.style.transform = 'scale(1)';
  });
}

