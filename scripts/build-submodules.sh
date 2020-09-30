
if [ ! -f static/wakan.wasm ]
then
    cd ./build/ && \
    make && \
    cd ../ && \
    cp build/bin/wakan.* static/
fi
