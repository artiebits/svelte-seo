import { test, expect } from "@playwright/test";
import data from "../routes/index.js";

test.describe.configure( { mode: "parallel" });

test.describe("Loads twitter tags", ()=>{
    test.beforeEach(async ( { page })=>{
        await page.goto("/");
    });


    test("Loads twitter title tag correctly", async ( { page })=>{
        expect(await page.locator("meta[name='twitter:title']").getAttribute("content")).toBe(data.twitter.title);
    })

    test("Loads twitter card correctly", async ( { page })=>{
        expect(await page.locator("meta[name='twitter:card']").getAttribute("content")).toBe(data.twitter.card);
    });

    test("Loads twitter image correctly", async ( { page })=>{
        expect(await page.locator("meta[name='twitter:image']").getAttribute("content")).toBe(data.twitter.image);
    });

    
    test("Loads twitter image alt correctly", async ( { page })=>{
        expect(await page.locator("meta[name='twitter:image:alt']").getAttribute("content")).toBe(data.twitter.imageAlt);
    });

    test("Loads twitter site tag correctly", async ( { page })=>{
        expect(await page.locator("meta[name='twitter:site']").getAttribute("content")).toBe(data.twitter.site);
    });

    test("Loads twitter creator tag correctly", async ( { page })=>{
        expect(await page.locator("meta[name='twitter:creator']").getAttribute("content")).toBe(data.twitter.creator);
    });

    test("Loads twitter player  tags correctly", async ( { page })=>{
        expect(await page.locator("meta[name='twitter:player']").getAttribute("content")).toBe(data.twitter.player);
    });

    test("Loads twitter player width tag correctly", async ( { page })=>{
        expect(await page.locator("meta[name='twitter:player:width']").getAttribute("content")).toBe(data.twitter.playerWidth);
    });

    test("Loads twtter player height tag correctly", async ( { page })=>{
        expect(await page.locator("meta[name='twitter:player:height']").getAttribute("content")).toBe(data.twitter.playerHeight);
    });


    test("Loads twitter player stream tag correctly", async ( { page })=>{
        expect(await page.locator("meta[name='twitter:player:stream']").getAttribute("content")).toBe(data.twitter.playerStream);
    });

    test("Loads twitter app name Iphone tag correctly", async ( { page })=>{
        expect(await page.locator("meta[name='twitter:app:name:iphone']").getAttribute("content")).toBe(data.twitter.appNameIphone);
    });

    test("Loads twitter app Id Iphone tag correctly", async ( { page })=>{
        expect(await page.locator("meta[name='twitter:app:id:iphone']").getAttribute("content")).toBe(data.twitter.appIdIphone);
    });

    test("Loads twitter app url iphone tag correctly", async ( { page })=>{
        expect(await page.locator("meta[name='twitter:app:url:iphone']").getAttribute("content")).toBe(data.twitter.appUrlIphone);
    });

    test("Loads twitter app name ipad tag correctly", async ( { page })=>{
        expect(await page.locator("meta[name='twitter:app:name:ipad']").getAttribute("content")).toBe(data.twitter.appNameIpad);
    });

    test("Loads twitter googleplay app id tag correctly", async ( { page })=>{
        expect(await page.locator("meta[name='twitter:app:id:googleplay']").getAttribute("content")).toBe(data.twitter.appIdGoogleplay);
    });

    test("Loads twitter googleplay app name tag correctly", async ( { page })=>{
        expect(await page.locator("meta[name='twitter:app:name:googleplay']").getAttribute("content")).toBe(data.twitter.appNameGoogleplay);
    });

    test("Loads twitter googleplay app url correctly", async ( { page })=>{
        expect(await page.locator("meta[name='twitter:app:url:googleplay']").getAttribute("content")).toBe(data.twitter.appUrlGoogleplay);
    })

});