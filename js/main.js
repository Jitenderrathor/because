//  dark and light mode 
 // Listen for the change event on the checkbox
$('#checkbox').change(function() {
    // Check if the checkbox is checked
    if ($(this).is(':checked')) {
      // If checked, add classes for dark mode and remove classes for light mode
      $('body').removeClass('light').addClass('dark');
      $('.mode-text').removeClass('light').addClass('dark').text('Dark');
    } else {
      // If not checked, add classes for light mode and remove classes for dark mode
      $('body').removeClass('dark').addClass('light');
      $('.mode-text').removeClass('dark').addClass('light').text('Light');
    }
  });