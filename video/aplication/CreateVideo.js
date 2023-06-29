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
exports.PostVideo = void 0;
class PostVideo {
    constructor(addVideo) {
        this.addVideo = addVideo;
    }
    createVideo(Id, Title, Duration) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const video = yield this.addVideo.addVideo(Id, Title, Duration);
                if (!video) {
                    throw new Error(`video ${Title} no se agregado`);
                }
                return video;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.PostVideo = PostVideo;
