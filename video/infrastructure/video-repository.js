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
exports.AddVideoRepository = void 0;
const mysql_1 = require("../../mysql");
const video_1 = require("../domain/video");
class AddVideoRepository {
    addVideo(Id, Title, Duration) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (0, mysql_1.createPool)();
            try {
                const query = `INSERT INTO Video (id, title, duration) VALUES (?, ?, ?)`;
                const values = [
                    Id,
                    Title,
                    Duration,
                ];
                yield connection.query(query, values);
                const video = new video_1.Video(Id, Title, Duration);
                return video;
            }
            catch (error) {
                throw new Error(`No se pudo agregar el video: ${error}`);
            }
            finally {
                connection.end();
            }
        });
    }
}
exports.AddVideoRepository = AddVideoRepository;
