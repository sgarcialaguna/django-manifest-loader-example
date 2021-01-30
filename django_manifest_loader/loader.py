from manifest_loader.loaders import LoaderABC

import fnmatch
class MyLoader(LoaderABC):
    @staticmethod
    def get_single_match(manifest, key):
        files = manifest.get('files', {})
        return files.get(key, key)

    @staticmethod
    def get_multi_match(manifest, pattern):
        return manifest[pattern]