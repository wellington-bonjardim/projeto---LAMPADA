function isLampBroken () {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn () {
    if(!isLampBroken()) {
        lamp.src = '/assets/ligada.jpg'
    }    
}

function lampOff () {
    if(!isLampBroken()) {
        lamp.src = '/assets/desligada.jpg'
    }
}

function actionOnMouseOver() {
    if(!isLampBroken()) {
        lamp.src = '/assets/ligada.jpg'
    }
}

function actionOnMouseOut() {
    if(!isLampBroken()) {
        lamp.src = '/assets/desligada.jpg'
    }    
}

function lampBroken() {
    lamp.src = '/assets/quebrada.jpg'
}



