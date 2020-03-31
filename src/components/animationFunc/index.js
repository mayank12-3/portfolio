export const scrollFunc = () => {
	overrideScrollhander()
	toggleColor()
	stickySectionHeader()
}

export const toggleColor = () => {
  let pos = document.getElementById('experience-section-wrapper').getBoundingClientRect()
  let stylesheet = document.getElementById('darkmodeStyle-sheet')
  if (!stylesheet) {
    stylesheet = document.createElement('style')
    stylesheet.id = 'darkmodeStyle-sheet'
    stylesheet.innerHTML = `
      .dark-mode { background: black !important; color: white !important; }
      .toggle-dark-mode { background: white !important; color: black !important; }`
  }
  let body = document.getElementsByTagName('body')[0]
  if (pos.top <= 120 && !document.getElementById('darkmodeStyle-sheet')) {
    document.body.appendChild(stylesheet)
  } else {
    pos.top > 120 && document.getElementById('darkmodeStyle-sheet') &&
    document.body.removeChild(stylesheet)
  }
}

export const overrideScrollhander = () => {
	// WIP
	let topScrolledBy = document.body.getBoundingClientRect().y
	let updatedVal = Math.abs(topScrolledBy || -1)/2
	// window.scrollTo(0, Math.abs(topScrolledBy || -1)/2)
	let body = document.body
	body.style.transform = 'translateY(-' + updatedVal + ')'
}

export const stickySectionHeader = () => {
	let sectionsList = Array.from(document.getElementsByTagName('section'))
	sectionsList = sectionsList.slice(1) // exp, work, about me

	sectionsList.map(ele => {
		const pos = ele.getBoundingClientRect()
		let posY = pos.y
		let stickyNode = ele.children[0]
		if (posY <= 20 && !stickyNode.className.includes('sticky')) {
			stickyNode.className += ' sticky'
		} else if (posY > 20 && stickyNode.className.includes('sticky')) {
			stickyNode.className = 'section-heading'
		}
	})
}
