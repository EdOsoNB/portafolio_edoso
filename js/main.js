const sections = document.querySelectorAll('[id]')
sections.forEach((section, i) => {
    if( i % 2 == 0) {
        section.style.background = '#EAF2FD'
    }
    section.style.margin = '20px 0px'
    section.style.padding = '50px 0px'
})