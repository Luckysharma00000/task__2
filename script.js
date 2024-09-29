function downloadResume() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1KtiDR6xtzLCQ18nuWgn8crfXWB2D7lQP/view?usp=sharing';
    link.download = 'my_resume.pdf';
    link.click();
  }
  