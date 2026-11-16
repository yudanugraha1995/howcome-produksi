#!/bin/bash
# f.sh id mp3 words
cd /home/user/howcome-produksi/kit
SP=$(python3 -c "exec(open('/home/user/howcome-produksi/naskah/b3/nar.py').read());print(N['$1'][3])")
python3 fetch_i.py "$1" "$2" "$3" "$SP" 2>&1 | tail -1 | cut -c1-80
