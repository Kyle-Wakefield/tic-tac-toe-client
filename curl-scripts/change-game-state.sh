ID="60661b2e7c24060017b18bc5"
INDEX=0

curl "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "o"
      },
      "over": false
    }
  }'
echo
