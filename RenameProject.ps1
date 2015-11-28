$name = Read-Host 'What is your new project namespace?'
$nameToReplace = "Project.Name"
$wildcardName = "*"+$nameToReplace + "*"
If ($name -Match " ")
{
    "No spaces allowed"
    exit
}

Get-ChildItem -filter $wildcardName -Recurse | Rename-Item -NewName { $_.Name -replace $nameToReplace, $name } | where-object { $_.Name -notMatch "packages"  }
$files=get-childitem . *.* -rec | where { ! $_.PSIsContainer }
foreach ($file in $files)
{
    If ($file.PSPath -Match ".ps1" -Or $file.PSPath -Match "packages" -Or $file.PSPath -Match ".dll")
    {
        Write-Host $file.PSPath ' is in the excluded list so ignoring it'
    }
    Else
    {
        Write-Host 'Processing ' + $file.PSPath
        (Get-Content $file.PSPath) | Foreach-Object {$_ -replace $nameToReplace, $name} | Set-Content $file.PSPath
    }
}