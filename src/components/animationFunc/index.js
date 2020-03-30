export const scrollFunc = () => {
	overrideScrollhander()
	toggleColor()
}

export const toggleColor = () => {
  let pos = document.getElementById('work-info-warpper').getBoundingClientRect()
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
    pos.top >= 120 && document.getElementById('darkmodeStyle-sheet') &&
    document.body.removeChild(stylesheet)
  }
}

export const overrideScrollhander = () => {
	let topScrolledBy = document.body.getBoundingClientRect().y
	console.log('scroll value: ', Math.abs(topScrolledBy || -1)/2)
	let updatedVal = Math.abs(topScrolledBy || -1)/2
	// window.scrollTo(0, Math.abs(topScrolledBy || -1)/2)
	let body = document.body
	body.style.transform = 'translateY(-' + updatedVal + ')'
}