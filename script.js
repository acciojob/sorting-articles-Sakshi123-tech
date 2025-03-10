//your JS code here. If required.
 const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 
                  'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
                  'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    // Function to remove 'a', 'an', 'the' from the beginning of each band name for sorting
    function cleanBandName(name) {
        return name.replace(/^(a|an|the)\s+/i, '').toLowerCase();
    }

    // Sort the bands array by cleaned names
    const sortedBands = bands.sort((a, b) => cleanBandName(a).localeCompare(cleanBandName(b)));

    // Populate the unordered list with the sorted bands
    const bandList = document.getElementById('band');
    sortedBands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        bandList.appendChild(li);
    });