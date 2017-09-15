function CloneOrPull
{
      param([string]$gitRepo, [string]$branch, [string]$folderName)

      if (Test-Path $folderName\.git)
      {
          Push-Location $folderName
          & git pull
          Pop-Location
      }
      else
      {
          & git clone -c core.longpaths=true -q --branch=$branch $gitRepo $folderName
      }
}

$ErrorActionPreference = 'Stop'

$scriptPath = $MyInvocation.MyCommand.Path
$rootFolder = Split-Path $scriptPath | Split-Path
$src = "src"
md -Force $rootFolder\$src
Push-Location $rootFolder\$src

[System.Reflection.Assembly]::LoadWithPartialName("System.Web.Extensions")
$JSON = Get-Content -Path $rootFolder\repo.json -Raw
$HT = (New-Object System.Web.Script.Serialization.JavaScriptSerializer).Deserialize($JSON, [System.Collections.Hashtable])
$HT.repo.GetEnumerator() | ForEach-Object {
	CloneOrPull $($_.Value.url) $($_.Value.branch) $($_.Value.name)

	if ($_.Value.build_script)
	{
		Push-Location $($_.Value.name)
		Invoke-Expression $_.Value.build_script
		Pop-Location
	}
}

Pop-Location
