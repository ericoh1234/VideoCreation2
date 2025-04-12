

document.addEventListener('DOMContentLoaded', function () {
  // Toggle Advanced Settings
  const toggleButton = document.getElementById('toggle-advanced');
  const advancedSettings = document.getElementById('advanced-settings');
  const arrow = toggleButton.querySelector('.arrow');

  toggleButton.addEventListener('click', function () {
    advancedSettings.classList.toggle('open');
    arrow.classList.toggle('open');

    if (advancedSettings.classList.contains('open')) {
      toggleButton.innerHTML = `<span class="arrow open">▾</span> HIDE VIDEO ADVANCED SETTINGS`;
    } else {
      toggleButton.innerHTML = `<span class="arrow">▾</span> SHOW VIDEO ADVANCED SETTINGS`;
    }
  });

  // Form Submission
  const form = document.getElementById('site-generator-form');
  const thankYouMessage = document.getElementById('thank-you-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const photoUpload = document.getElementById('photo-upload').value;
    const emailContact = document.getElementById('email-contact').value;
    const comments = document.getElementById('comments').value;
    const primaryColor = document.getElementById('primary-color').value;
    const template = document.getElementById('template').value;

    // Show submission is processing
    const submitButton = document.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'PROCESSING...';
    submitButton.disabled = true;

    // Simulate processing (would connect to backend in the future)
    setTimeout(function () {
      // Reset form input values
      document.getElementById('photo-upload').value = '';
      document.getElementById('email-contact').value = '';
      document.getElementById('comments').value = '';
      document.getElementById('primary-color').value = '#6A4AE8';
      document.getElementById('template').selectedIndex = 0;

      // Restore button text and functionality
      submitButton.textContent = originalText;
      submitButton.disabled = false;

      // Show thank you message
      thankYouMessage.classList.add('thank-you-visible');
      thankYouMessage.classList.remove('thank-you-hidden');

      // Hide thank you message after 5 seconds
      setTimeout(function () {
        thankYouMessage.classList.remove('thank-you-visible');
        thankYouMessage.classList.add('thank-you-hidden');
      }, 5000);
    }, 2000);

    // Log the data (would be sent to backend in the future)
    console.log({
      photoUpload,
      emailContact,
      comments,
      primaryColor,
      template
    });
  });

  // Live preview updates
  const colorInput = document.getElementById('primary-color');

  colorInput.addEventListener('input', function () {
    // Update the progress indicator color in the video controls
    document.querySelector('.progress-indicator').style.backgroundColor = this.value;

    // In a more robust implementation, this would update more preview elements
    console.log('Color updated:', this.value);
  });
});

// Add animation class when page loads
window.addEventListener('load', function () {
  setTimeout(function () {
    document.querySelector('.video-preview').classList.add('loaded');
  }, 300);
});

// Show
thankYouMessage.classList.add('thank-you-visible');
thankYouMessage.classList.remove('thank-you-hidden');

// Hide (after 5s)
thankYouMessage.classList.remove('thank-you-visible');
thankYouMessage.classList.add('thank-you-hidden');





