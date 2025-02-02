const verifyUserRecord = async () => {
    // Query for the listing by owner and id
    const { data, error } = await supabase
      .from("listing")
      .select("*")
      .eq("createdBy", user?.primaryEmailAddress.emailAddress)
      .eq("id", params.id)
      .single(); // Ensures you get only one record, or null if none found
    
    // Handle any errors during the query
    if (error) {
      console.error("Error fetching listing:", error);
      toast.error("Error fetching listing.");
      router.replace("/"); // Redirect to home if there’s an error
      return;
    }
  
    // Check if listing data is found
    if (!data) {
      console.warn("Unauthorized or listing not found.");
      toast.error("Unauthorized or listing not found");
      router.replace("/"); // Redirect if no matching listing found
      return;
    }
  
    // ✅ Fetch images separately
    const { data: imagesData, error: imagesError } = await supabase
      .from("listingImages")
      .select("url")
      .eq("listing_id", params.id);
  
    if (imagesError) {
      console.error("Error fetching images:", imagesError);
    }
  
    // ✅ Merge listing and images and set state
    setListing({ ...data, images: imagesData || [] });
  };
  


//   Alternates 2
const verifyUserRecord = async () => {
    if (!user?.primaryEmailAddress?.emailAddress || !id) {
      console.warn("Invalid user or listing ID.");
      router.replace("/");
      return;
    }
  
    const { data, error } = await supabase
      .from("listing")
      .select("createdBy") // Only fetch `createdBy` for efficiency
      .eq("id", id)
      .single();
  
    if (error || !data || data.createdBy !== user.primaryEmailAddress.emailAddress) {
      console.warn("Unauthorized access. Redirecting...");
      router.replace("/");
      return;
    }
  
    // Fetch full listing details only if authorized
    const { data: listingData, error: listingError } = await supabase
      .from("listing")
      .select("*, listingImages(listing_id, url)")
      .eq("id", id)
      .single();
  
    if (listingError) {
      console.error("Error fetching listing details:", listingError);
      router.replace("/");
      return;
    }
  
    console.log("Listing found:", listingData);
    setListing(listingData);
  };



  //  Solution 3
  const verifyUserRecord = async () => {
      const { data, error } = await supabase
          .from('listing')
          .select('*,listingImages(listing_id,url)')
          .eq('createdBy', user?.primaryEmailAddress.emailAddress)
          .eq('id', id);
      if (data) {
          console.log(data)
          setListing(data[0]);
      }
      if (data.length <= 0) {
          router.replace('/')
      }
  }
  


  <Link href="/sign-in">
        <Button className="bg-blue-700 text-white border-purple-500 flex gap-2 items-center">
            <LockKeyhole className="h-5 w-5" />
            Sign In
        </Button>
  </Link>