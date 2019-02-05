const chai = require("chai");
chai.should();

const metadata = require("./data/metadata.json");
const dicomMicroscopyViewer = require("../build/dicom-microscopy-viewer.js");

describe("dicomMicroscopyViewer.VLWholeSlideMicroscopyImageViewer", () => {
  const viewer = new dicomMicroscopyViewer.VLWholeSlideMicroscopyImageViewer({
    client: "foo",
    metadata: metadata,
    useWebGL: false
  });
});
