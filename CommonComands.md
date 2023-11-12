docker build -t ms1 .
docker run --name ms1 -p 9999:9999 ms1

docker build -t ms2 .
docker run --name ms2 -p 9999:9999 ms2

docker build -t nodeapp .
docker run --name nodeapp -p 9999:9999 nodeapp