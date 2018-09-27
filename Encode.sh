for i in $(seq 1401 1436)
do
	var=$(openssl gost-mac<<<$i)
	echo $i : $var
done