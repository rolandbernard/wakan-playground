ODIR=./objs
BDIR=./bin

IDIR=../wakan/src
SDIR=../wakan/src

CC=emcc
LINK=emcc
CFLAGS=-O3 -Oz -I$(IDIR) -Wall $(FLAGS) -s INVOKE_RUN=0 \
	-s MODULARIZE=1 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -s ENVIRONMENT=web -s FORCE_FILESYSTEM=1 \
	-s ERROR_ON_UNDEFINED_SYMBOLS=0 -s EXPORT_NAME=Wakan -s EXPORTED_RUNTIME_METHODS='["callMain", "FS"]'
LIBS=-lpthread -lm

_SRC=$(wildcard $(SDIR)/*/*.c) $(wildcard $(SDIR)/*.c)
OBJ=$(patsubst $(SDIR)/%.c,$(ODIR)/%.o,$(_SRC))

DEPS=$(wildcard $(IDIR)/*/*.h) $(wildcard $(IDIR)/*.h)

_BIN=wakan.js
BIN=$(patsubst %,$(BDIR)/%,$(_BIN))

.PHONY: all
all: $(BIN) 

.PHONY: install
install: all
	cp $(BIN) /usr/bin/

$(BDIR)/$(_BIN): $(OBJ)
	mkdir -p `dirname $@`
	$(LINK) $(CFLAGS) -o $@ $^ $(LIBS)

$(ODIR)/%.o: $(SDIR)/%.c $(DEPS)
	mkdir -p `dirname $@`
	$(CC) $(CFLAGS) -c -o $@ $<
	
.PHONY: clean
clean:
	rm -fr $(ODIR)/*

.PHONY: cleanall
cleanall:
	rm -fr $(ODIR)/* $(BDIR)/*