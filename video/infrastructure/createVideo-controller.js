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
exports.CreateVideoController = void 0;
class CreateVideoController {
    constructor(postVideo) {
        this.postVideo = postVideo;
    }
    createVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Id = req.body.Id;
            const Title = req.body.Title;
            const Duration = req.body.Duration;
            const resultado = yield this.postVideo.createVideo(Id, Title, Duration);
            console.log("controller", resultado.title);
            res
                .status(200)
                .send(`La solicitud ${resultado.title} fue éxitoso`);
        });
    }
}
exports.CreateVideoController = CreateVideoController;
