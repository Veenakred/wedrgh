tmImage.load(
	checkpoint = string, 
	metadata?  string | Metadata;)

    tmImage.loadFromFiles{
        model = File, 
        weights = File, 
        metadata = File
    
    }

    const uploadModel = document.getElementById('upload-model');
const uploadWeights = document.getElementById('upload-weights');
const uploadMetadata = document.getElementById('upload-metadata');
model = await tmImage.loadFromFiles(uploadModel.files[0], uploadWeights.files[0], uploadMetadata.files[0])

model.predict(
    image = HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap,
    flipped = false
  )

  const flip = true;
const allPredictions = await model.predict(webcamElement, flip);

const flip = true;
const maxPredictions = model.getTotalClasses();
const prediction = await model.predictTopK(webcamElement, maxPredictions, flip);    

new tmImage.Webcam(
    width = 400,
    height = 400,
    flip = false,
)

const webcam = new tmImage.Webcam(200, 200, true);
await webcam.setup();
webcam.play();
document.body.appendChild(webcam.canvas);

webcam.setup(
	options = MediaTrackConstraints = {}
)

await webcam.setup();

webcam.play();
webcam.pause();
webcam.stop();

webcam.update();