gum spin --spinner dot --title "Oceanus AI is loading..." -- sleep 2
gum style \
	--foreground 212 --border-foreground 212 --border double \
	--align center --width 50 --margin "1 2" --padding "2 4" \
	'Oceanus AI'
gum style \
	--foreground 212 'Hello Chuck, what can I do for you today?'
echo ''
gum input
sleep 2
echo ''
gum style \
	--foreground 212 'Monero (XMR) is the most useful cryptocurrency.'
