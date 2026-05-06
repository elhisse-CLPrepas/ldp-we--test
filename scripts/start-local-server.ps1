param(
  [int]$Port = 8081
)

$Root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$Prefix = "http://127.0.0.1:$Port/"

$ContentTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".png"  = "image/png"
  ".mp4"  = "audio/mp4"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
}

$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add($Prefix)
$listener.Start()

Write-Host "Serveur local disponible sur $Prefix"
Write-Host "Racine servie: $Root"
Write-Host "Fermer cette fenetre ou utiliser Ctrl+C pour arreter."

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $requestPath = [Uri]::UnescapeDataString($context.Request.Url.AbsolutePath.TrimStart("/"))

    if ([string]::IsNullOrWhiteSpace($requestPath)) {
      $requestPath = "index.html"
    }

    $candidate = Join-Path $Root $requestPath
    $fullPath = [System.IO.Path]::GetFullPath($candidate)

    if ($fullPath.StartsWith($Root) -and [System.IO.File]::Exists($fullPath)) {
      $bytes = [System.IO.File]::ReadAllBytes($fullPath)
      $extension = [System.IO.Path]::GetExtension($fullPath).ToLowerInvariant()
      $context.Response.ContentType = $ContentTypes[$extension]

      if (-not $context.Response.ContentType) {
        $context.Response.ContentType = "application/octet-stream"
      }

      $context.Response.StatusCode = 200
      $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $context.Response.StatusCode = 404
    }

    $context.Response.Close()
  }
} finally {
  $listener.Stop()
  $listener.Close()
}
