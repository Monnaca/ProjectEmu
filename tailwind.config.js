/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/js/*.js"
    ],
    theme: {
        extend: {
            colors : {
                "dbg" : "#212121",
                "lbg" : "#E0E0E0",
            },
            space: {
                '5px': '5px'
            },
            animation: {
                'blink': 'blink .6s linear infinite alternate',
                'cday' : 'cday 2000ms linear',
                'cnight' : 'cnight 2s linear',
                'sil' : 'slideInLeft 5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
                'sib' : 'slideInBottom 3.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
            },
            keyframes: {
                blink: {
                    '0%' : {'opacity': '1'},
                    '40%' : {'opacity': '1'},
                    '60%' : {'opacity': '0'},
                    '100%' : {'opacity': '0'},
                },
                cday: {
                    '0%' : {'background-color': '#2b2b2b', 'opacity' : '1'},
                    '50%' : {'background-color': '#2b2b2b', 'opacity' : '1'},
                    '75%' : {'background-color' : '#ffffff', 'opacity' : '1'},
                    '100%' : {'background-color' : '#ffffff', 'opacity' : '1'},
                },
                cnight : {
                    '0%' : {'background-color': '#ffffff'},
                    '50%' : {'background-color' :'#ffffff'},
                    '75%' : {'background-color' : '#2b2b2b'},
                    '100%' : {'background-color' : '#2b2b2b'},
                },
                rotateIn : {
                    '0%' : {
                        "-webkit-transform" : "rotate(-45deg)",
                        "transform" : "rotate(-45deg)",
                        "-webkit-transform-origin" : "100% 0",
                        "transform-origin" : "100% 0",
                        "opacity" : "0"
                    },
                    '100%' : {
                        "-webkit-transform" : "rotate(0)",
                        "transform" : "rotate(0)",
                        "-webkit-transform-origin" : "0 0",
                        "transform-origin" : "0 0",
                        "opacity" : "1"
                    }
                },
                slideInBottom: {
                    '0%' : {
                        "transform" : "translateY(1000px)",
                        "-webkit-transform" : "translateY(1000px)",
                        "opacity" : "0",
                    },
                    '100%' : {
                        "transform" : "translateY(0)",
                        "-webkit-transform" : "translateY(0)",
                        "opacity" : "1",
                    }
                },
                slideInLeft: {
                    "0%" : {
                        "-webkit-transform": "translateX(-1000px)",
                        "transform": "translateX(-1000px)",
                        "opacity": "0"
                    },
                    "100%" : {
                        "-webkit-transform" : "translateX(0)",
                        "transform" : "translateX(0)",
                        "opacity": "1"
                    }
                }
            }
        },
        fontFamily: {
            nunito: ['"Nunito Sans"', 'sans-serif']
        }
    },
    plugins: []
}
