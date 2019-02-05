import { VLWholeSlideMicroscopyImageViewer } from "./api.js";
import { ROI } from "./roi.js";
import { Point, Multipoint, Polyline, Circle, Ellipse } from "./scoord.js";

const scoord = {
  Point,
  Multipoint,
  Polyline,
  Circle,
  Ellipse
};

const DICOMMicroscopyViewer = {
  VLWholeSlideMicroscopyImageViewer,
  ROI,
  scoord
};

export default DICOMMicroscopyViewer;
