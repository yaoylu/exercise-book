const fs = require("fs");
function cleanString(s) {
    // 要移除的内容
    const contentToRemove = ["spalink:20240108.134", "spalink:latest","spalink%3A20240108.134","spalink%3Alatest"];
    for (const content of contentToRemove) {
        s = s.replace(content, "");
    }
    return s.trim();
}
function isEquivalent(a, b) {
    try{
        if(a === b) {
            return true;
        }else if (typeof a === "string" && typeof b === "string" && cleanString(a) === cleanString(b)) {
            return true;
        }
    } catch (e) {
        console.log(a,b);
        console.log(e);
    }
    return false;

}
function compareJSON(obj1, obj2, path = "") {
    const differences = {};

    for (const key in obj1) {
        if(key === "nativeAds") {
            continue;
        }
        if (obj1.hasOwnProperty(key)) {
            const val1 = obj1[key];
            const val2 = obj2[key];
            const currentPath = path ? `${path}.${key}` : key;
            // if(key === "crids") {
            //     console.log(val1, val2);
            // }
            if (Array.isArray(val1) && Array.isArray(val2)) {
                if (val1.length !== val2.length) {
                    differences[currentPath] = {
                        json1: val1.length,
                        json2: val2.length
                    };
                }else{

                    const nestedDifferences = compareJSON(val1, val2, currentPath);
                    if (Object.keys(nestedDifferences).length > 0) {
                        Object.assign(differences, nestedDifferences);
                    }

                }
            } else if (
                typeof val1 === "object" && typeof val2 === "object") {
                const nestedDifferences = compareJSON(val1, val2, currentPath);
                if (Object.keys(nestedDifferences).length > 0) {
                    Object.assign(differences, nestedDifferences);
                }
            } else if (isEquivalent(val1, val2) === false) {
                differences[currentPath] = {
                    json1: val1,
                    json2: val2
                };
            }
        }
    }

    return differences;
}

// 读取第一个 JSON 文件
fs.readFile("data/prod.json", "utf8", (err, data1) => {
    if (err) {
        console.error("读取文件1时出错:", err);
        return;
    }

    // 读取第二个 JSON 文件
    fs.readFile("data/1.json", "utf8", (err, data2) => {
        if (err) {
            console.error("读取文件2时出错:", err);
            return;
        }

        try {
            // 将 JSON 数据解析为对象
            const json1 = JSON.parse(data1);
            const json2 = JSON.parse(data2);

            // 比较两个 JSON 对象
            const diff = compareJSON(json2, json1);

            if (Object.keys(diff).length > 0) {
                console.log("JSON 对象不同：", JSON.stringify(diff, null, 2));
                fs.writeFileSync("data/diff2.json", JSON.stringify(diff, null, 2));
            } else {
                console.log("JSON 对象相同");
            }
        } catch (parseError) {
            console.error("解析 JSON 时出错:", parseError);
        }
    });
});
