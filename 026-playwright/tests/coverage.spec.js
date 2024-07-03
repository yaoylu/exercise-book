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
const { chromium } = require("playwright");
const v8toIstanbul = require("v8-to-istanbul");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield chromium.launch();
    const page = yield browser.newPage();
    yield page.coverage.startJSCoverage();
    yield page.goto("https://chromium.org");
    const coverage = yield page.coverage.stopJSCoverage();
    for (const entry of coverage) {
        const converter = v8toIstanbul("", 0, { source: entry.source });
        yield converter.load();
        converter.applyCoverage(entry.functions);
        console.log(JSON.stringify(converter.toIstanbul()));
    }
    yield browser.close();
}))();
