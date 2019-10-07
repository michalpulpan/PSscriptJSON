#include json2.js





//saveJpeg('test');

(function main() {

  var jsonFile = loadJson('db.json');

  var textFolder = app.activeDocument.layerSets.getByName('textLayer');
  var textLayer = textFolder.layers[0];

  for (var i = 0; i<jsonFile.length; i++) {
    var textJson = jsonFile[i];
    textLayer.textItem.contents = textJson.text;
    saveImg(i);
  }



})();

function saveImg(name) {

  var doc = app.activeDocument;
  var file = new File(doc.path + '/' + name + '.jpg');

  var opts = new JPEGSaveOptions();
  opts.quality = 7;

  doc.saveAs(file, opts, true);


}

function loadJson(relPath){
  var script = new File($.fileName);

  var doc = app.activeDocument;

  var jsonFile = new File(doc.path + '/' + relPath);

  jsonFile.open('r');
  var str = jsonFile.read();
  jsonFile.close();

  return JSON.parse(str);
}



