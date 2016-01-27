# js-serialization-bench
This is a very simple micro benchmark for js serialization tools: good old JSON, MSGPACK, ProtobufJS and FlatBufferJS  
No results here, run by yourself the benches within your browser!!!

## TodoList scenario
http://alexvictoor.github.io/js-serialization-bench/bench.html

## Price scenario
http://alexvictoor.github.io/js-serialization-bench/bench-price.html

## Price, without string, scenario
http://alexvictoor.github.io/js-serialization-bench/bench-price-nostring.html

## About the bench
3 scenarios have been implemented, each of them built the same way:

1. 10000 objects are serialized, the results are stored in an array
2. Then the time needed to deserialize all these objects is used to compute the average deserialization time    

The tests are run several times, after a warmup phase.  
About the bench accuracy, I have not found a way to get a nano time precision within a browser, that is why there is no percentile (instead of averages) computed by this benches.  
Disclaimer: The code has been done in a quick'n'dirty mode, PR to clean it up are welcome :)  


