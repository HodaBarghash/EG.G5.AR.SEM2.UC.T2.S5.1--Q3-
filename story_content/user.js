function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6VUe9Ikn9kM":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzhQExNVBwK8B_YVsIAZ1vfIHC7VuPFX68b_9Qo-hVPa4LsdtCy_f3RpgKkx2aQlHRX/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

