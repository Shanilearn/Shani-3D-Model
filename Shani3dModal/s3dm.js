var modelViewer = document.getElementById('model');
function stop(){
    modelViewer.animationName = 'none';
}
function run(){
    modelViewer.animationName = 'Running';
}
function wave(){
    modelViewer.animationName = 'Wave';
}