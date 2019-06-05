module.exports = {
  plugins: [
    function({ addComponents }) {
      const toggles = {
        '.toggle': {
          'position': 'absolute',
          'left': '-9999px',
        },
        '.toggle+label': {
			'box-sizing': 'content-box',
			'user-select': 'none',
			'box-shadow': 'inset 4px 4px 5px -2px rgba(0, 0, 0, 0.2), inset -2px -2px 5px -2px rgba(0, 0, 0, 0.2)',
			'transition': 'background-color 80ms ease',
			'padding': '0.12rem',
			'-webkit-mask-image': '-webkit-radial-gradient(white, black)',
        },
        '.toggle+label::after': {
			'font-size': '0.5rem',
			'line-height': '1.5rem',
			'transition': 'transform 150ms cubic-bezier(0.77, 0, 0.175, 1)',
			'box-shadow': '3px 4px 11px -2px rgba(0, 0, 0, 0.4)	,0px 0px 2px 1px rgba(0, 0, 0, 0.2)',
			'display': 'flex',
			'justify-content': 'center',
			'color': '#7F7F7F',
			'width': '1.5rem',
			'height': '1.5rem',
			'background-color': '#fff',
			'border-radius': '9999px',
			'content': '"||"',
        },
        '.toggle:checked+label': {
			'background-color': '#84F591',
			'transition-delay': '70ms',
        },
        '.toggle:checked+label::after': {
			'transform': 'translate(1rem)',
        },
        '.toggle.small:checked+label::after': {
			'transform': 'translate(0.5rem)',
        },
        '.toggle.big:checked+label::after': {
			'transform': 'translate(1.5rem)',
        },
      }

      addComponents(toggles)
    }
  ]
}