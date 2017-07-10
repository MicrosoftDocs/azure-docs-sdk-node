
for file in `ls -1 *md`; do
	file -bi $file | grep -q 'utf-16le'
	if [[ $? == 0 ]]; then
		echo "Recoding $file..."
		iconv -f UTF16LE -t UTF8 -o $file.utf8 $file
		if [[ $? == 0 ]]; then
			mv $file.utf8 $file
		fi
	fi
	echo "Removing $file BOM..."
	sed -i '1 s/^\xEF\xBB\xBF//' $file
done
