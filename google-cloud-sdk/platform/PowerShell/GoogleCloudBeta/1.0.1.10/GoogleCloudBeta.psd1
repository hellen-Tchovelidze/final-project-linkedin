﻿#
# Module manifest for module 'GoogleCloudBeta'
#
# Generated by: Google Inc
#
# Generated on: 9/17/2018
#

@{

# Script module or binary module file associated with this manifest.
RootModule = 'GoogleCloud.psm1'

# Version number of this module.
ModuleVersion = '1.0.1.10'

# Supported PSEditions
# CompatiblePSEditions = @()

# ID used to uniquely identify this module
GUID = 'e74637e6-7a4e-422d-bb9c-ca50809d78bb'

# Author of this module
Author = 'Google Inc'

# Company or vendor of this module
CompanyName = 'Google Inc'

# Copyright statement for this module
Copyright = 'Google Inc. All rights reserved.'

# Description of the functionality provided by this module
Description = 'PowerShell cmdlets for the Google Cloud Platform.'

# Minimum version of the Windows PowerShell engine required by this module
PowerShellVersion = '3.0'

# Name of the Windows PowerShell host required by this module
# PowerShellHostName = ''

# Minimum version of the Windows PowerShell host required by this module
# PowerShellHostVersion = ''

# Minimum version of Microsoft .NET Framework required by this module. This prerequisite is valid for the PowerShell Desktop edition only.
DotNetFrameworkVersion = '4.0'

# Minimum version of the common language runtime (CLR) required by this module. This prerequisite is valid for the PowerShell Desktop edition only.
CLRVersion = '4.0'

# Processor architecture (None, X86, Amd64) required by this module
ProcessorArchitecture = 'None'

# Modules that must be imported into the global environment prior to importing this module
# RequiredModules = @()

# Assemblies that must be loaded prior to importing this module
# RequiredAssemblies = @()

# Script files (.ps1) that are run in the caller's environment prior to importing this module.
# ScriptsToProcess = @()

# Type files (.ps1xml) to be loaded when importing this module
# TypesToProcess = @()

# Format files (.ps1xml) to be loaded when importing this module
FormatsToProcess = 'GoogleCloudPlatform.Format.ps1xml'

# Modules to import as nested modules of the module specified in RootModule/ModuleToProcess
# NestedModules = @()

# Functions to export from this module, for best performance, do not use wildcards and do not delete the entry, use an empty array if there are no functions to export.
FunctionsToExport = 'gs:'

# Cmdlets to export from this module, for best performance, do not use wildcards and do not delete the entry, use an empty array if there are no cmdlets to export.
CmdletsToExport = 'Get-BqDataset', 'Set-BqDataset', 'New-BqDataset', 'Remove-BqDataset', 
               'Get-BqTable', 'Set-BqTable', 'New-BqTable', 'Remove-BqTable', 
               'New-BqSchema', 'Set-BqSchema', 'Add-BqTableRow', 'Get-BqTableRow', 
               'Get-BqJob', 'Start-BqJob', 'Receive-BqJob', 'Stop-BqJob', 
               'Get-GkeCluster', 'New-GkeNodeConfig', 'Add-GkeCluster', 
               'Set-GkeCluster', 'Remove-GkeCluster', 'Add-GkeNodePool', 
               'Get-GkeNodePool', 'New-GkeNodePool'

# Variables to export from this module
VariablesToExport = @()

# Aliases to export from this module, for best performance, do not use wildcards and do not delete the entry, use an empty array if there are no aliases to export.
AliasesToExport = @()

# DSC resources to export from this module
# DscResourcesToExport = @()

# List of all modules packaged with this module
ModuleList = @()

# List of all files packaged with this module
# FileList = @()

# Private data to pass to the module specified in RootModule/ModuleToProcess. This may also contain a PSData hashtable with additional module metadata used by PowerShell.
PrivateData = @{

    PSData = @{

        # Tags applied to this module. These help with module discovery in online galleries.
        Tags = 'Google', 'Cloud', 'Compute', 'Storage', 'GCS', 'GCE', 'SQL', 'DNS', 'PubSub', 
               'Logging', 'PSEdition_Core', 'PSEdition_Desktop'

        # A URL to the license for this module.
        LicenseUri = 'https://github.com/GoogleCloudPlatform/google-cloud-powershell/blob/master/LICENSE'

        # A URL to the main website for this project.
        ProjectUri = 'https://github.com/GoogleCloudPlatform/google-cloud-powershell'

        # A URL to an icon representing this module.
        IconUri = 'https://raw.githubusercontent.com/GoogleCloudPlatform/google-cloud-powershell/master/Assets/LOGO.png'

        # ReleaseNotes of this module
        ReleaseNotes = 'This module contains a set of cmdlets that let you manage Google Cloud Platform resources.
Currently, the supported resources are Google Cloud Storage, Google Compute Engine,
Google Cloud DNS and Google Cloud SQL.

The module also contains a PowerShell provider for Google Cloud Storage. This provider allows
you to use commands like ''cd'', ''dir'', ''copy'' and ''del'' to navigate and manipulate your data
in Cloud Storage as if the data were on a local file system.

The module requires Google Cloud SDK to work.'

    } # End of PSData hashtable

} # End of PrivateData hashtable

# HelpInfo URI of this module
# HelpInfoURI = ''

# Default prefix for commands exported from this module. Override the default prefix using Import-Module -Prefix.
# DefaultCommandPrefix = ''

}


# SIG # Begin signature block
# MIIUEgYJKoZIhvcNAQcCoIIUAzCCE/8CAQExDzANBglghkgBZQMEAgEFADB5Bgor
# BgEEAYI3AgEEoGswaTA0BgorBgEEAYI3AgEeMCYCAwEAAAQQH8w7YFlLCE63JNLG
# KX7zUQIBAAIBAAIBAAIBAAIBADAxMA0GCWCGSAFlAwQCAQUABCCLuolm7lVwm2dC
# X9N4OY+7NEXK1y4d4VL3tTfsgLKXxKCCDtswggSZMIIDgaADAgECAg8WiPA5JV5j
# jmkUOQfmMwswDQYJKoZIhvcNAQEFBQAwgZUxCzAJBgNVBAYTAlVTMQswCQYDVQQI
# EwJVVDEXMBUGA1UEBxMOU2FsdCBMYWtlIENpdHkxHjAcBgNVBAoTFVRoZSBVU0VS
# VFJVU1QgTmV0d29yazEhMB8GA1UECxMYaHR0cDovL3d3dy51c2VydHJ1c3QuY29t
# MR0wGwYDVQQDExRVVE4tVVNFUkZpcnN0LU9iamVjdDAeFw0xNTEyMzEwMDAwMDBa
# Fw0xOTA3MDkxODQwMzZaMIGEMQswCQYDVQQGEwJHQjEbMBkGA1UECBMSR3JlYXRl
# ciBNYW5jaGVzdGVyMRAwDgYDVQQHEwdTYWxmb3JkMRowGAYDVQQKExFDT01PRE8g
# Q0EgTGltaXRlZDEqMCgGA1UEAxMhQ09NT0RPIFNIQS0xIFRpbWUgU3RhbXBpbmcg
# U2lnbmVyMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA6ek939c3CMke
# OLJSU0JtIvGxxAYEa579gnRQQ33GoLsfTvkCcSax70PYg4xI/OcPl3qa65zepqMO
# OxxEGHWOeKUXaf5JGKTiu1xO/o4qVHpQ8NX2zJHnmXnX3nmU15Yz/g6DviK/YxYs
# o90oG689q+qX0vG/BBDnPUhF/R9oZcF/WZlpwCIxDGJup1xlASGwY8QiGCfu5vzS
# AD1HLqi4hlZdBNwTFyVuHN9EDxXNt9ulV3ZCbwBogpnS48He8IuUV0zsCJAiIc4i
# K5gMQuZCk5SYk+/9Btk/vFubVDwgse5q1kd6xauA6TCa3vGkP1VNCgk0inUp0mmt
# lw9Qv/jKCQIDAQABo4H0MIHxMB8GA1UdIwQYMBaAFNrtZHQUnBQ8q92Zqb1bKE2L
# PMnYMB0GA1UdDgQWBBSOay0za/Qzp5OzE5ql4Ar3EjVqiDAOBgNVHQ8BAf8EBAMC
# BsAwDAYDVR0TAQH/BAIwADAWBgNVHSUBAf8EDDAKBggrBgEFBQcDCDBCBgNVHR8E
# OzA5MDegNaAzhjFodHRwOi8vY3JsLnVzZXJ0cnVzdC5jb20vVVROLVVTRVJGaXJz
# dC1PYmplY3QuY3JsMDUGCCsGAQUFBwEBBCkwJzAlBggrBgEFBQcwAYYZaHR0cDov
# L29jc3AudXNlcnRydXN0LmNvbTANBgkqhkiG9w0BAQUFAAOCAQEAujMkQECMfNtY
# n7NgmLL1wDH+6x9uUPYK4OTmga0mh6Lf/bPa9HPzAPspG4kbFT7ba1KTK8SsOYHX
# PGdXmjk24CgImuM5T5uJCX97xWF/WYkyJQpqrho+8KInqLbDuIf3FgRIQT1c2Oyf
# TSAxBNlloe3NaQdTFj3dNgIKiOtA5QYwC7gWS9zvvFUJ/8Y+Ei52s9zOQu/5dlfh
# twoFQJhYml1xFpNxjGWB6m/ziff7c62057/Zjm+qC08l87jh1d11mGiB+KrA0YDC
# xMQ5icH2yZ5s13T52Zf4T8KaCs1ej/gZ6eCln8TwkiHmLXklySL5w/A6hFetOhb0
# Y5QQHV3QxjCCBN0wggPFoAMCAQICECqcIayqpjo8WKe5MivulI0wDQYJKoZIhvcN
# AQELBQAwfzELMAkGA1UEBhMCVVMxHTAbBgNVBAoTFFN5bWFudGVjIENvcnBvcmF0
# aW9uMR8wHQYDVQQLExZTeW1hbnRlYyBUcnVzdCBOZXR3b3JrMTAwLgYDVQQDEydT
# eW1hbnRlYyBDbGFzcyAzIFNIQTI1NiBDb2RlIFNpZ25pbmcgQ0EwHhcNMTUxMjE2
# MDAwMDAwWhcNMTgxMjE2MjM1OTU5WjBkMQswCQYDVQQGEwJVUzETMBEGA1UECAwK
# Q2FsaWZvcm5pYTEWMBQGA1UEBwwNTW91bnRhaW4gVmlldzETMBEGA1UECgwKR29v
# Z2xlIEluYzETMBEGA1UEAwwKR29vZ2xlIEluYzCCASIwDQYJKoZIhvcNAQEBBQAD
# ggEPADCCAQoCggEBAMQNgsRBKSjl/Qw/pccOZr2lxIuziqyEA5+ELjjfBrFO/TNg
# WDg23SLP3/FQH0fxVQXBgQHnKD7/X4kSCerfqhdJLHGrSNGdLvRR4APg9xZsewwi
# dW1+H0nEQyiIQdxs7RMqA5nrYhT5NSZuEiwD4veBuRoFZwZ8phpb7SAV5S2D3o42
# +h4IQRwaSJ+28cMvAhNLp8q67xxYb47TDxSkCytduvRaow1kNKWK149NImZNpK7h
# +c3GWObGEXcy37rfOUiK0SfXM3eoyeRe7foSz/P9+u6rgIYTNOtafm9sG+7YS7LM
# d5iHrMr1u2RvSR5bkWNQH2MtgydzB58rFvR7cSkCAwEAAaOCAW4wggFqMAkGA1Ud
# EwQCMAAwDgYDVR0PAQH/BAQDAgeAMBMGA1UdJQQMMAoGCCsGAQUFBwMDMGYGA1Ud
# IARfMF0wWwYLYIZIAYb4RQEHFwMwTDAjBggrBgEFBQcCARYXaHR0cHM6Ly9kLnN5
# bWNiLmNvbS9jcHMwJQYIKwYBBQUHAgIwGRoXaHR0cHM6Ly9kLnN5bWNiLmNvbS9y
# cGEwHwYDVR0jBBgwFoAUljtT8Hkzl699g+8uK8zKt4YecmYwKwYDVR0fBCQwIjAg
# oB6gHIYaaHR0cDovL3N2LnN5bWNiLmNvbS9zdi5jcmwwVwYIKwYBBQUHAQEESzBJ
# MB8GCCsGAQUFBzABhhNodHRwOi8vc3Yuc3ltY2QuY29tMCYGCCsGAQUFBzAChhpo
# dHRwOi8vc3Yuc3ltY2IuY29tL3N2LmNydDARBglghkgBhvhCAQEEBAMCBBAwFgYK
# KwYBBAGCNwIBGwQIMAYBAQABAf8wDQYJKoZIhvcNAQELBQADggEBACPnk5Ov26hN
# r69U6NgmlYDNI5Fw7QtbsenY3R5AN3iXGO2f5YRnhQZQtfGr5oNaF3tRvn8Yxkde
# K6r0oB81PgWfQ0D3n9H04acC847Jcf4YN0hC1+Q2cxCS1NjZHMQmWBhntiQiaWMC
# 90lRa3X2tH1W/yz0iPdnbwiG84sLMAJ/bZLZTr2Z93t0hgzLua0sv0R5qACCnGL0
# qhHf0r/w4ZIoEZC7XjOIhpZN3Quvw2ehlS1EMsb697iAwU44vh+2hPfxITFnSaif
# inUH3zs6w+pyzUB/p9p8yS58qQzxXVyCQmK5SZSPcOalwF8X+0A2wTqJYwMcP2ag
# PY+hTE5crL8wggVZMIIEQaADAgECAhA9eNf5dklgsmF99PAeyoYqMA0GCSqGSIb3
# DQEBCwUAMIHKMQswCQYDVQQGEwJVUzEXMBUGA1UEChMOVmVyaVNpZ24sIEluYy4x
# HzAdBgNVBAsTFlZlcmlTaWduIFRydXN0IE5ldHdvcmsxOjA4BgNVBAsTMShjKSAy
# MDA2IFZlcmlTaWduLCBJbmMuIC0gRm9yIGF1dGhvcml6ZWQgdXNlIG9ubHkxRTBD
# BgNVBAMTPFZlcmlTaWduIENsYXNzIDMgUHVibGljIFByaW1hcnkgQ2VydGlmaWNh
# dGlvbiBBdXRob3JpdHkgLSBHNTAeFw0xMzEyMTAwMDAwMDBaFw0yMzEyMDkyMzU5
# NTlaMH8xCzAJBgNVBAYTAlVTMR0wGwYDVQQKExRTeW1hbnRlYyBDb3Jwb3JhdGlv
# bjEfMB0GA1UECxMWU3ltYW50ZWMgVHJ1c3QgTmV0d29yazEwMC4GA1UEAxMnU3lt
# YW50ZWMgQ2xhc3MgMyBTSEEyNTYgQ29kZSBTaWduaW5nIENBMIIBIjANBgkqhkiG
# 9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl4MeABavLLHSCMTXaJNRYB5x9uJHtNtYTSNi
# arS/WhtR96MNGHdou9g2qy8hUNqe8+dfJ04LwpfICXCTqdpcDU6kDZGgtOwUzpFy
# VC7Oo9tE6VIbP0E8ykrkqsDoOatTzCHQzM9/m+bCzFhqghXuPTbPHMWXBySO8Xu+
# MS09bty1mUKfS2GVXxxw7hd924vlYYl4x2gbrxF4GpiuxFVHU9mzMtahDkZAxZeS
# itFTp5lbhTVX0+qTYmEgCscwdyQRTWKDtrp7aIIx7mXK3/nVjbI13Iwrb2pyXGCE
# nPIMlF7AVlIASMzT+KV93i/XE+Q4qITVRrgThsIbnepaON2b2wIDAQABo4IBgzCC
# AX8wLwYIKwYBBQUHAQEEIzAhMB8GCCsGAQUFBzABhhNodHRwOi8vczIuc3ltY2Iu
# Y29tMBIGA1UdEwEB/wQIMAYBAf8CAQAwbAYDVR0gBGUwYzBhBgtghkgBhvhFAQcX
# AzBSMCYGCCsGAQUFBwIBFhpodHRwOi8vd3d3LnN5bWF1dGguY29tL2NwczAoBggr
# BgEFBQcCAjAcGhpodHRwOi8vd3d3LnN5bWF1dGguY29tL3JwYTAwBgNVHR8EKTAn
# MCWgI6Ahhh9odHRwOi8vczEuc3ltY2IuY29tL3BjYTMtZzUuY3JsMB0GA1UdJQQW
# MBQGCCsGAQUFBwMCBggrBgEFBQcDAzAOBgNVHQ8BAf8EBAMCAQYwKQYDVR0RBCIw
# IKQeMBwxGjAYBgNVBAMTEVN5bWFudGVjUEtJLTEtNTY3MB0GA1UdDgQWBBSWO1Pw
# eTOXr32D7y4rzMq3hh5yZjAfBgNVHSMEGDAWgBR/02Wnwt3su/AwCfNDOfoCrzMx
# MzANBgkqhkiG9w0BAQsFAAOCAQEAE4UaHmmpN/egvaSvfh1hU/6djF4MpnUeeBcj
# 3f3sGgNVOftxlcdlWqeOMNJEWmHbcG/aIQXCLnO6SfHRk/5dyc1eA+CJnj90Htf3
# OIup1s+7NS8zWKiSVtHITTuC5nmEFvwosLFH8x2iPu6H2aZ/pFalP62ELinefLyo
# qqM9BAHqupOiDlAiKRdMh+Q6EV/WpCWJmwVrL7TJAUwnewusGQUioGAVP9rJ+01M
# j/tyZ3f9J5THujUOiEn+jf0or0oSvQ2zlwXeRAwV+jYrA9zBUAHxoRFdFOXivSdL
# VL4rhF4PpsN0BQrvl8OJIrEfd/O9zUPU8UypP7WLhK9k8tAUITGCBI0wggSJAgEB
# MIGTMH8xCzAJBgNVBAYTAlVTMR0wGwYDVQQKExRTeW1hbnRlYyBDb3Jwb3JhdGlv
# bjEfMB0GA1UECxMWU3ltYW50ZWMgVHJ1c3QgTmV0d29yazEwMC4GA1UEAxMnU3lt
# YW50ZWMgQ2xhc3MgMyBTSEEyNTYgQ29kZSBTaWduaW5nIENBAhAqnCGsqqY6PFin
# uTIr7pSNMA0GCWCGSAFlAwQCAQUAoIGEMBgGCisGAQQBgjcCAQwxCjAIoAKAAKEC
# gAAwGQYJKoZIhvcNAQkDMQwGCisGAQQBgjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwG
# CisGAQQBgjcCARUwLwYJKoZIhvcNAQkEMSIEIMQSXuN2kQB1CfdsoJ3I+L/QFXdv
# Y7IPjrQyK5HQGIV0MA0GCSqGSIb3DQEBAQUABIIBAIp4dbGHSadgrPlxAh2vTcLl
# T5wHMj7X0qR2lMeQ/XtsexZgrj5K1yc7HH6hsbQZrlDe+bcsRJ6lR5e84bomvT6D
# 4NhsTU+tsfrVnkq0L3Kek7RdAyKMz2B8fNBEt9BidQBG0zd25CUVUx2PGv1i0WAL
# f1WRoVHyRUq3TkqhR+8B48h58TpHrIb5bgnvaJ4njtJUo/jx7Yh1JH9UI4+fY6Uy
# wxkBe9yUgFkPDZ8LpJoTlF5i/s/CqjK7su0f671oWNGjND4siyy1aa69utqfe7Bm
# MmzvWbkOfR2fDsw0O45Btq85TdFFGiZ+z25g165N7ESCin6QzLD7kQK+uKhsxMqh
# ggJDMIICPwYJKoZIhvcNAQkGMYICMDCCAiwCAQEwgakwgZUxCzAJBgNVBAYTAlVT
# MQswCQYDVQQIEwJVVDEXMBUGA1UEBxMOU2FsdCBMYWtlIENpdHkxHjAcBgNVBAoT
# FVRoZSBVU0VSVFJVU1QgTmV0d29yazEhMB8GA1UECxMYaHR0cDovL3d3dy51c2Vy
# dHJ1c3QuY29tMR0wGwYDVQQDExRVVE4tVVNFUkZpcnN0LU9iamVjdAIPFojwOSVe
# Y45pFDkH5jMLMAkGBSsOAwIaBQCgXTAYBgkqhkiG9w0BCQMxCwYJKoZIhvcNAQcB
# MBwGCSqGSIb3DQEJBTEPFw0xODA5MTcyMjExMTZaMCMGCSqGSIb3DQEJBDEWBBTX
# zaU2Fs40odrQHjd2NZV/GhcfsDANBgkqhkiG9w0BAQEFAASCAQBUXytzw7xLttpa
# r3Q7oR80lz9rjDpVSJlxKS3iTUBsVmzIwqME6JOPHQcDkzvERmKKeLukR5wXg+4F
# hMKQjzdAtZkBNQlB1tuNXq4jmX/wlQse8MxmRuKtDBVLE/gh0kDSesUJZrDWTzQC
# b/rIPaFOusmYm4hbXAYe/jaHc357mXrOA4iPAsDIZ5TvwGtX0tmXPtWnG+H/QPQP
# gGOYQEsnsYnZ10mrVGUEYSmmuKNGBCDNq9dj2SzLBeYOWSoIu2M5S77dKH5P3nqI
# potTsZq9V6l4FW6NfLWi4ravVZrPBs15OVtEZ2FSWHNlQJbbImBl+HKgqmGHzqdO
# XPUvynKQ
# SIG # End signature block
