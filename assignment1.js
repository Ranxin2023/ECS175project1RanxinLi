import { hex2rgb } from './js/utils/utils.js'

/**
 * Initializes WebGL2 
 * @returns { WebGL2RenderingContext | null } The WebGL2 context or Null
 */
let my_gl;
let blue_color;
let gold_color;
function updateColor(...color){
    my_gl.clearColor(...color);
    my_gl.clear(my_gl.COLOR_BUFFER_BIT);
    my_gl.viewport(0, 0, 0, 0);
}
function checkKey(event){
    
    let canvas_color;
    let list_rgb;
    //alert(event.keyCode)
    switch(event.keyCode){
        case 66||98:{
            //alert("haha")
            gold_color.classList.replace("active", "inactive")
            blue_color.classList.replace("inactive", "active")
            canvas_color="#022851";
            list_rgb=hex2rgb(canvas_color)
            updateColor(list_rgb[0], list_rgb[1], list_rgb[2], 1.0);
            break;
        }
        case 71||103:{
            blue_color.classList.replace("active", "inactive")
            gold_color.classList.replace("inactive", "active")
            canvas_color="#FFBF00"
            list_rgb=hex2rgb(canvas_color)
            updateColor(list_rgb[0], list_rgb[1], list_rgb[2], 1.0);
            break;
        }
    }
}
function initGl( )
{
    //alert("hello world");
    
    const canvas = document.getElementById('canvas');
    if (!canvas) {
        console.error('Sorry! No HTML5 Canvas was found on this page');
        return;
    }
    my_gl =canvas.getContext("webgl2")
    if(!my_gl){
        throw '"initGl" not implemented' 
    }
    blue_color= document.getElementById("blueCanvasColor")
    gold_color=document.getElementById("goldCanvasColor")
    blue_color.classList.replace("inactive", "active")
    let canvas_color="#022851";
    let list_rgb=hex2rgb(canvas_color)
    updateColor(list_rgb[0], list_rgb[1], list_rgb[2], 1.0);
    
    window.onkeydown=checkKey
    

    //throw '"initGl" not implemented' 

}


/**
 * Clears scene and canvas
 * 
 * Find the Aggie colors here: https://marketingtoolbox.ucdavis.edu/brand-guide/colors
 * Use the 'hex2rgb' function to convert HEX colors
 * 
 * Use app_state.getState( ui_element_name ) to query the UI state
 * For example app_state.getState( 'Canvas Color' ) returns the currently selected color name
 * 
 * @param { WebGL2RenderingContext } gl The WebGL2 context used on the canvas element
 * @param { AppState } app_state The state of the UI
 */

function clearCanvas( gl, app_state )
{
    throw '"clearCanvas" not implemented' 
}



// JS Module Export -- No need to modify this
export
{

    initGl,
    clearCanvas,

}

window.onload=initGl