"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoController = void 0;
class VideoController {
    constructor(getAllVideoUseCase) {
        this.getAllVideoUseCase = getAllVideoUseCase;
    }
    getAllVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const videos = yield this.getAllVideoUseCase.execute();
                res.status(200).send(videos);
            }
            catch (error) {
                res.status(500).json({ error: "Failed to get video" });
            }
        });
    }
}
exports.VideoController = VideoController;
