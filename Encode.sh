for i in $(seq 1401 1436)
do
	echo $i : $(echo -n $i | openssl gost-mac)
done