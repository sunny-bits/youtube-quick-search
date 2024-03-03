chrome.omnibox.onInputEntered.addListener( function(input)
{
    // Encode user input for special characters
    var url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(input); 

    // Query user input
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs)
    { 
        // Update current tab to YouTube search URL
        chrome.tabs.update(tabs[0].id, { url: url });
    }); 
});