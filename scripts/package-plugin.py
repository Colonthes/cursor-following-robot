"""Build a reproducible, installable WordPress ZIP using only Python's standard library."""
from pathlib import Path
import json
import shutil
import zipfile

ROOT = Path(__file__).resolve().parents[1]
PLUGIN = ROOT / "wordpress" / "cursor-robot"
ASSETS = ["robot.bundle.js", "loader.js", "chat-bridge.js", "robot.css",
          "robot-poster.png"]

def package():
    version = json.loads((ROOT / "package.json").read_text())["version"]
    php = (PLUGIN / "cursor-robot.php").read_text()
    if f"Version: {version}" not in php:
        raise SystemExit("Plugin and package versions differ")
    (PLUGIN / "assets").mkdir(exist_ok=True)
    for name in ASSETS:
        shutil.copyfile(ROOT / "assets" / name, PLUGIN / "assets" / name)
    files = {"cursor-robot.php": PLUGIN / "cursor-robot.php",
             "readme.txt": PLUGIN / "readme.txt",
             "LICENSE.txt": ROOT / "LICENSE",
             "THREE-LICENSE.txt": ROOT / "THREE-LICENSE.txt"}
    files.update({"assets/" + name: ROOT / "assets" / name for name in ASSETS})
    destination = ROOT / "downloads" / "cursor-robot.zip"
    destination.parent.mkdir(exist_ok=True)
    with zipfile.ZipFile(destination, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        for name, source in sorted(files.items()):
            info = zipfile.ZipInfo("cursor-robot/" + name, date_time=(2026, 10, 19, 0, 0, 0))
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o100644 << 16
            archive.writestr(info, source.read_bytes(), compress_type=zipfile.ZIP_DEFLATED, compresslevel=9)
    with zipfile.ZipFile(destination) as archive:
        if archive.testzip():
            raise SystemExit("ZIP integrity check failed")
    print(f"Built {destination.relative_to(ROOT)} ({destination.stat().st_size:,} bytes)")

if __name__ == "__main__":
    package()
