module.exports = {
  plugins: [
    function({ addComponents }) {
      const toggles = {
      	/*
			Remove the actual checkbox
      	*/
        '.toggle': {
          'position': 'absolute',
          'left': '-9999px',
        },

        /*
			This is the background pill
        */
        '.toggle+label': {
			'box-sizing': 'content-box',
			'user-select': 'none',
			'box-shadow': 'inset 4px 4px 5px -2px rgba(0, 0, 0, 0.2), inset -2px -2px 5px -2px rgba(0, 0, 0, 0.2)',
			'transition': 'background-color 80ms ease',
			'padding': '0.12rem',
			'-webkit-mask-image': '-webkit-radial-gradient(white, black)', // This is a fix for a Safari rendering bug
			'background': '#cbd5e0',
			'display': 'inline-block',
			'cursor': 'pointer',
			'height': '1.5rem',
			'width': '2.5rem',
			'border-radius': '9999px',
			'overflow': 'hidden'
        },
        '.toggle:checked+label': {
			'background-color': '#84F591', // Ripe for customizability
			'transition-delay': '70ms',
        },

        /*
			The toggle styling itself
        */ 
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
        '.toggle:checked+label::after': {
			'transform': 'translate(1rem)',
        },

        /*
			Size variations
			Both the background width and the toggle movement 
			are incremented and decremented by 0.5rem
			I kind of like the small one the best
        */ 
        '.toggle.small+label': {
			'width': '2rem',
        },
        '.toggle.big+label': {
			'width': '3rem',
        },
        '.toggle.small:checked+label::after': {
			'transform': 'translate(0.5rem)',
        },
        '.toggle.big:checked+label::after': {
			'transform': 'translate(1.5rem)',
        },

        /*
			Disabled styles
        */
        '.toggle[disabled]+label': {
        	'opacity': '0.6',
        	'cursor': 'not-allowed',
			'background-color': 'rgb(230, 230, 230)',
        },
        '.toggle:checked[disabled]+label': {
			'background-color': 'rgb(230, 230, 230)',
        },
        '.toggle[disabled]+label::after': {
			'background-color': 'rgba(255, 255, 255, 0.25)',
        },
      }

      addComponents(toggles)
    }
  ]
}